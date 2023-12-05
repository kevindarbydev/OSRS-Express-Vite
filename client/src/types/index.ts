/* eslint-disable @typescript-eslint/no-explicit-any */
export type GraphData = {
  rankData: {
    date: string;
    rank: number;
  }[];
  pointData: {
    date: string;
    points: number;
  }[];
};

//TODO: fix any types
export type CombinedData = {
  graphData?: GraphData[];
  leagueStats?: {
    skills: any; 
    points: number;
    rank: number;
    bosses: any; 
  };
};