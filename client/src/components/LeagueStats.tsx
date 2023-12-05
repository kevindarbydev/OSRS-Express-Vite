import LeagueGraph from "./graph/LeagueGraph";
import SkillsGrid from "./SkillsGrid";
import { Grid, Button, Box } from "@chakra-ui/react";
import { CombinedData, GraphData } from "../types";
import { useEffect, useState } from "react";
import StyledButton from "./StyledButton";
import BossKc from "./BossKc";

const LeagueStats = ({ data }: { data?: CombinedData[] }) => {
  const [activeView, setActiveView] = useState<string>("graph"); // "graph", "skills", or "bosses"
  const [graphData, setGraphData] = useState<GraphData[]>([]);
  const [leagueData, setLeagueData] = useState<any[]>([]); // Adjust the type according to the actual type of leagueStats.skills and leagueStats.bosses
  useEffect(() => {
    if (data) {
      setGraphData(data.graphData || []);
      setLeagueData(data.leagueStats || []);      
    }
  }, [data]);

  const handleViewSwitch = (view: string) => {
    setActiveView(view);
  };

  return (
    <>
      <Grid p={4}>
        {activeView === "graph" && <LeagueGraph data={graphData} />}
        {activeView === "skills" && (
          <SkillsGrid skillsData={leagueData.skills} rsn={data?.rsn} />
        )}
        {activeView === "bosses" && (
          <BossKc bossData={leagueData.bosses} />
        )}
      </Grid>
      <Box>
        <StyledButton
          onClick={() => handleViewSwitch("graph")}
          text=" View Graph"
        />
        <StyledButton
          onClick={() => handleViewSwitch("skills")}
          text="View Skills"
        />

        <StyledButton
          onClick={() => handleViewSwitch("bosses")}
          text="View Bosses"
        />
      </Box>
    </>
  );
};

export default LeagueStats;