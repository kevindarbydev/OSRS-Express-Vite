import LeagueGraph from "./graph/LeagueGraph";
import SkillsGrid from "./SkillsGrid";
import { Grid, Button } from "@chakra-ui/react";
import { CombinedData, GraphData } from "../types";
import { useEffect, useState } from "react";

const LeagueStats = ({ data }: { data?: CombinedData[] }) => {
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [leagueData, setLeagueData] = useState([]);
  useEffect(() => {
   
    let { graphData, leagueStats } = data;
    
  }, [data]);

  return (
    <>
      <Grid p={4}>{data && <LeagueGraph data={graphData} />}</Grid>
    </>
  );
};

export default LeagueStats;
/*  */