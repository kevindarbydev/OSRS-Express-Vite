import { useEffect } from "react";

interface LeaguePointsRank {
  rank: number;
  score: number;
}

const LeagueStats = ({data}) => {
    useEffect(() => {
     console.dir(data);   
    })

}
export default LeagueStats;