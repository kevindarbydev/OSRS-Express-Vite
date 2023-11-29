import { useState, useEffect, FormEvent } from "react";
import Layout from "../components/Layout";
import SkillsGrid from "../components/SkillsGrid";
import { Input, Text, Button, Grid } from "@chakra-ui/react";

// interface Bosses {
//   [key: string]: {
//     rank: number;
//     kills: number;
//   };
// }
const Hiscores = () => {
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
          <Text fontSize="h5" className="underline text-blue-600">
            Enter your RSN below, MAIN
          </Text>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              id="outlined-basic"
              placeholder="Enter your RSN"
              variant="outlined"
              value={rsn}
              onChange={(event) => setRsn(event.target.value)}
            />
            <Button
              variant="outline"
              colorScheme="blue"
              onClick={handleLookupHiScores}
              type="submit"
            >
              Lookup stats{" "}
            </Button>
          </form>
        </div>
        {playerData && (
          <>
            <SkillsGrid skillsData={playerData} />
          </>
        )}
      </Layout>
    </>
  );
};

export default Hiscores;
