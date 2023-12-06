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
  rsn?: string;
  leagueStats: LeagueStats;
};

export type LeagueStats = {
    skills: any; 
    points: number;
    rank: number;
    bosses: any; 
};

export type BossData = {
    bosses:{
      name: string;
      count: number;
    }[];
}

