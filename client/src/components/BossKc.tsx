import { Grid, GridItem, Text } from "@chakra-ui/react";
import { BossData } from "../types";

const BossKc = ({ data }: { data?: BossData[] }) => {
  const sortedBosses = Object.entries(data)
    .filter(([_, { score }]) => score !== -1)
    .sort(([, { rank: rankA }], [, { rank: rankB }]) => rankA - rankB);

  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={4}>
      {sortedBosses.map(([bossName, { rank, score }]) => (
        <GridItem key={bossName} p={4} borderWidth="1px" borderRadius="lg">
          <Text fontSize="lg" fontWeight="bold">
            {bossName}
          </Text>
          <Text>Rank: {rank}</Text>
          <Text>Score: {score}</Text>
        </GridItem>
      ))}
    </Grid>
  );
};

export default BossKc;
