import { useState, FormEvent } from "react";
import { Input, Text, Button, Box } from "@chakra-ui/react";
import Layout from "../components/Layout";
import LeagueStats from "../components/LeagueStats";

// interface Bosses {
//   [key: string]: {
//     rank: number;
//     kills: number;
//   };
// }

const Leagues = () => {
  const [rsn, setRsn] = useState("");
  const [data, setData] = useState();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  const handleLookup = async () => {
    try {
      const response = await fetch(`http://localhost:3030/leaguePoints/${rsn}`);
      const data = await response.json();
      setData(data);
      //TODO: send data from API to d3 graph
      // fix line in graph
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
                marginTop={2}
                variant="outline"
                colorScheme="blue"
                onClick={handleLookup}
                type="submit"
              >
                Lookup stats{" "}
              </Button>
            </Box>
          </form>
          <Box className="flex flex-col items-center">
            <LeagueStats data={data} />
          </Box>
        </div>
      </Layout>
    </>
  );
};

export default Leagues;
