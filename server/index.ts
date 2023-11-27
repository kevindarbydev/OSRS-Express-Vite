import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import hiscores, { getStats } from 'osrs-json-hiscores';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

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

app.get("/leaguePoints/:rsn", (req, res) => {
    console.log("Received request" + req.params.rsn)
  hiscores
    .getStatsByGamemode(req.params.rsn, 'seasonal')
    .then((response) =>  {
      console.log(response)
      var leagueStats  = {
        skills: response.skills,
        points: response.leaguePoints,
        bosses: response.bosses
      }
      res.send(JSON.stringify(leagueStats));})
    .catch((err) => {
      res.status(404).send({ status: 404, error: err });
    });
});

app.get("/stats/:rsn", (req, res) => {
     console.log("Received request" + req.params.rsn)
  hiscores
    .getStats(req.params.rsn)
    .then((response) => {res.send(JSON.stringify(response.main?.skills))})
    .catch((err) => {
      res.status(404).send({ status: 404, error: err });
    });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});