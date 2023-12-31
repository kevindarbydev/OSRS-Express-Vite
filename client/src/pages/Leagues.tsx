import { useState, FormEvent } from "react";
import { Input, Text, Button, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import LeagueStats from "../components/LeagueStats";
import { CombinedData } from "../types";

const Leagues = () => {
  const [rsn, setRsn] = useState("");
  const [leaguesData, setLeaguesData] = useState<CombinedData>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  const handleLookup = async () => {
    try {
      const response = await fetch(`http://localhost:3030/leaguePoints/${rsn}`);
      const leagueStats = await response.json();

      const dataPoints = await fetchDataPoints();
      const graphData = await dataPoints?.json();

      setLeaguesData({
        graphData: graphData,
        leagueStats: leagueStats,
        rsn: rsn
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataPoints = async () => {
    try {
      if (rsn) {
        const dataPoints = await fetch(`http://localhost:3030/${rsn}`);
        return dataPoints;
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center mt-2">
          <Text
            fontSize="26"
            className="underline text-blue-600"
            marginBottom={2}
          >
            Enter your RSN below, Leagues
          </Text>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              id="outlined-basic"
              placeholder="Enter your RSN"
              variant="outlined"
              value={rsn}
              onChange={(event) => setRsn(event.target.value)}
            />
            <Box className="flex flex-col items-center">
              <Button
                marginY={4}
                variant="outline"
                colorScheme="blue"
                onClick={handleLookup}
                type="submit"
              >
                Lookup stats{" "}
              </Button>
            </Box>
          </form>
          { leaguesData && <LeagueStats data={leaguesData} /> }
        </div>
      </Layout>
    </>
  );
};

export default Leagues;
