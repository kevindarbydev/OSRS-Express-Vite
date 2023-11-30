import { useEffect } from "react";
import LeagueGraph from "./graph/LeagueGraph";

interface LeaguePointsRank {
  rank: number;
  score: number;
}

const LeagueStats = ({ data }) => { 

  useEffect(() => {
    if (data){
   
    }
  }, [data])

  const dummyData = [
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
    </>
  );

}
export default LeagueStats;