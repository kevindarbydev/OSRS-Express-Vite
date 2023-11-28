import { useState, useEffect, FormEvent } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import SkillsGrid from "../components/SkillsGrid";

// interface Bosses {
//   [key: string]: {
//     rank: number;
//     kills: number;
//   };
// }
const Lookup = () => {
  const [rsn, setRsn] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [bossKc, setBossKc] = useState(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  const handleLookupHiScores = async () => {
    try {
      const response = await fetch(`http://localhost:3030/stats/${rsn}`);
      const data = await response.json();

      if (!data) {
        console.log("Response failed!");
        return;
      }
      setPlayerData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col items-center mt-2">
          <Typography variant="h5" className="underline text-blue-600">
            Enter your RSN below, MAIN
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
            <Button
              variant="contained"
              onClick={handleLookupHiScores}
              type="submit"
            >
              Lookup stats{" "}
            </Button>
          </form>
          <div className="w-full flex">
            {playerData && (
              <>
                <SkillsGrid skillsData={playerData} />
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Lookup;
