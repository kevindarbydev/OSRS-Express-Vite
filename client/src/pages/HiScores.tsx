import { useState, useEffect, FormEvent } from "react";
import Layout from "../components/Layout";
import SkillsGrid from "../components/SkillsGrid";
import { Input, Text, Button, Grid, Box } from "@chakra-ui/react";

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
        <Box className="flex flex-col items-center mt-2">
          <Text
            fontSize="26"
            className="underline text-blue-600"
            marginBottom={2}
          >
            Enter your RSN below, MAIN
          </Text>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              placeholder="Enter your RSN"
              variant="outlined"
              marginBottom={2}
              value={rsn}
              onChange={(event) => setRsn(event.target.value)}
            />
            <Box className="flex flex-col items-center">
              <Button
                variant="outline"
                colorScheme="blue"
                onClick={handleLookupHiScores}
                type="submit"
              >
                Lookup stats{" "}
              </Button>
            </Box>
          </form>
        </Box>
        {playerData && (
          <>            
              <SkillsGrid skillsData={playerData} rsn={rsn} />           
          </>
        )}
      </Layout>
    </>
  );
};

export default Hiscores;
