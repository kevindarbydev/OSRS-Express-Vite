import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import hiscores, { getStats } from 'osrs-json-hiscores';
dotenv.config();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS league_points (id INTEGER PRIMARY KEY AUTOINCREMENT, rsn TEXT, date TEXT, points INTEGER, rank INTEGER)");
})

const app: Express = express();
const port = process.env.PORT;

interface LeaguePointRecord {
  id: number;
  rsn: string;
  date: string;
  points: number;
  rank: number;
}

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.get("/leaguePoints/:rsn", (req: Request, res: Response) => {
    console.log("Received request " + req.params.rsn)
    const formattedDate = new Date().toISOString();

  hiscores
    .getStatsByGamemode(req.params.rsn, 'seasonal')
    .then((response) =>  {
      var leagueStats = {
        skills: response.skills,
        points: response.leaguePoints.score,
        rank: response.leaguePoints.rank,
        bosses: response.bosses
      }


      db.get("SELECT * FROM league_points WHERE rsn = ? AND date = ? AND points = ? AND rank = ?", [req.params.rsn, formattedDate, leagueStats.points, leagueStats.rank], (err: { message: string; }, row: any) => {
        if (err) {
          console.error(err.message);
          res.status(500).send('Internal Server Error');
          return;
        }
     
        if (row) {
          console.log("duplicate!")
          res.status(400).send('Duplicate data. Already exists in the database.');
          return;
        }

        db.run("INSERT INTO league_points (rsn, date, points, rank) VALUES (?, ?, ?, ?)", [req.params.rsn, formattedDate, leagueStats.points, leagueStats.rank], (err: { message: string; }) => {
          if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
          }

          res.send(JSON.stringify(leagueStats));
        });
      })
    })
    .catch((err) => {
      res.status(404).send({ status: 404, error: err });
    });
});

app.get("/:rsn", (req: Request, res: Response) => {
     console.log("Received request" + req.params.rsn)
    const rsn = req.params.rsn;

     db.all("SELECT date, points, rank FROM league_points WHERE rsn = ?", [rsn], (err: { message: string; }, rows: any[]) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }

    if (rows.length < 3) {
      return res.status(400).send('Not enough data available');
    }

    const rankData = rows.map((row) => ({
      date: row.date,
      rank: row.rank,
    }));

    const pointData = rows.map((row) => ({
      date: row.dates,
      points: row.points
    }));

    res.json([rankData, pointData]);
  });
});

app.get("/stats/:rsn", (req: Request, res: Response) => {
  console.log("Received request " + req.params.rsn)
  hiscores
    .getStats(req.params.rsn)
    .then((response) => {res.send(JSON.stringify(response.main?.skills))})
    .catch((err) => {
      res.status(404).send({ status: 404, error: err });
    });
});

process.on('SIGINT', () => {
  db.close((err: { message: string; }) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Closed the database connection.');
      process.exit(0);
    }
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});