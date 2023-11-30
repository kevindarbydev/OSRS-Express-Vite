import LeagueGraph from "./graph/LeagueGraph";
import { Grid, Button } from "@chakra-ui/react";

type GraphData = {  
  date: string,
  value: number
}

const LeagueStats = ({ data }) => { 

  const dummyData: GraphData[] = [
    { date: "11/20/2023", value: 2900 },
    { date: "11/21/2023", value: 5000 },
    { date: "11/22/2023", value: 6110 },
    { date: "11/23/2023", value: 9210 },
    { date: "11/24/2023", value: 11240 },
    { date: "11/25/2023", value: 13420 },
    { date: "11/26/2023", value: 16880 },
    { date: "11/27/2023", value: 24000 },
  ];

  return (
    <>
      <LeagueGraph data={dummyData} />
      <br />
      <Grid p={4}>
        <Button variant="outline" colorScheme="blue">
          View Rank Graph
        </Button>
        <Button variant="outline" colorScheme="blue">
          View Point Graph
        </Button>
        <Button variant="outline" colorScheme="blue">
          View Skills
        </Button>
      </Grid>
    </>
  );

}
export default LeagueStats;