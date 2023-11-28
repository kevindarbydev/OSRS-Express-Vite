
import LeagueGraph from "./graph/LeagueGraph";

interface LeaguePointsRank {
  rank: number;
  score: number;
}
/*
11/20/2023, 2900
11/21/2023, 5000
11/22/2023, 6100
11/23/2023, 9000
11/24/2023, 11240
11/25/2023, 13420
11/26/2023, 15880
11/27/2023, 17860


*/

const LeagueStats = () => { 
  const data = [
    { date: "11/20/2023", value: 2900 },
    { date: "11/21/2023", value: 5000 },
    { date: "11/22/2023", value: 6110 },
    { date: "11/23/2023", value: 9210 },
    { date: "11/24/2023", value: 11240 },
    { date: "11/25/2023", value: 13420 },
    { date: "11/26/2023", value: 16880 },
    { date: "11/27/2023", value: 18260 },
  ];
  return (
    <>
      <p>Stats</p>
      <LeagueGraph data={data} />
    </>
  );

}
export default LeagueStats;