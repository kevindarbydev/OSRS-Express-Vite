import { useState, FormEvent } from "react";
import { Input, Text, Button } from "@chakra-ui/react";
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
          <Text fontSize="h5" className="underline text-blue-600">
            Enter your RSN below
          </Text>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              id="outlined-basic"
              placeholder="RSN"
              variant="outlined"
              style={{ width: "180px", margin: "1rem 0", display: "flex" }}
              value={rsn}
              onChange={(event) => setRsn(event.target.value)}
            />
            <Button variant="contained" onClick={handleLookup} type="submit">
              Lookup stats{" "}
            </Button>
          </form>      
            <LeagueStats />        
        </div>
      </Layout>
    </>
  );
};

export default Leagues;
