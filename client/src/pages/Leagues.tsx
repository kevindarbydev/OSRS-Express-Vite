import { useState, FormEvent } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import Layout from "../components/Layout";

// interface Bosses {
//   [key: string]: {
//     rank: number;
//     kills: number;
//   };
// }

interface LeaguePointsRank {
  rank: number;
  score: number;
}
const Leagues = () => {
  const [rsn, setRsn] = useState("");
  const [output, setOutput] = useState<LeaguePointsRank>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  const handleLookup = async () => {
    try {
      const response = await fetch(`http://localhost:3030/leaguePoints/${rsn}`);
      const data = await response.json();

      setOutput(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center mt-2">
          <Typography variant="h5" className="underline text-blue-600">
            Enter your RSN below
          </Typography>
          <form onSubmit={(e) => handleSubmit(e)}>
            <TextField
              id="outlined-basic"
              label="RSN"
              variant="outlined"
              style={{ width: "180px", margin: "1rem 0", display: "flex" }}
              value={rsn}
              onChange={(event) => setRsn(event.target.value)}
            />
            <Button variant="contained" onClick={handleLookup} type="submit">
              Lookup stats{" "}
            </Button>
          </form>
          <div className="w-full flex">
            {output &&(
              <>
               
               <p>Rank: {output?.rank}</p>         
               <p>Points: {output?.score}</p>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Leagues;
