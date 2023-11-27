import { useEffect } from "react";
import LeagueGraph from "./graph/LeagueGraph";
interface LeaguePointsRank {
  rank: number;
  score: number;
}


const LeagueStats = ({data}) => { 
  return (
    <>
    <p>Stats</p>
    <LeagueGraph data={[1,2,3,4,5,6,7]}/>
    </>
  );

}
export default LeagueStats;