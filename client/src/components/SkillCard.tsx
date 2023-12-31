import ProgressBar from "./ProgressBar";
import { Grid, GridItem, Image, Text } from "@chakra-ui/react";

interface Props {
  skill: {
    name: string;
    data: {
      rank: number;
      level: number;
      xp: number;
    };
  };
  rsn: string;
}

const SkillCard = ({ skill, rsn }: Props) => {
  
  return (
    <>
      {skill.name !== "overall" ? (
        <GridItem
          backgroundColor="beige"
          padding={2}
          borderRadius={10}
          paddingBottom={2}
        >
          <Grid>
            <Image
              src={`/skill-icons/${skill.name}_icon.png`}
              alt={`${skill.name} icon`}
              width={26}
              height={34}
            />
            <Text fontSize="h3">{skill.name}</Text>
            <Text fontSize="h3" className="opacity-60">
              Rank: <span className="opacity-100">{skill.data.rank}</span>
            </Text>
            <Text fontSize="h3" className="opacity-60">
              Level: <span className="opacity-100">{skill.data.level}</span>
            </Text>
            <Text variant="subtitle1" className="opacity-60">
              XP: <span className="opacity-100">{skill.data.xp}</span>
            </Text>
            <ProgressBar xp={skill.data.xp} level={skill.data.level} />
          </Grid>
        </GridItem>
      ) : (
        <GridItem backgroundColor="teal" padding={4}>
          <Grid templateAreas="`image image">
            <Text fontSize="h2" fontWeight="bold">
              {rsn}
            </Text>
            <Text variant="h6">{skill.name}</Text>
            <Text variant="subtitle1">Rank: {skill.data.rank}</Text>
            <Text variant="subtitle1">Level: {skill.data.level}</Text>
            <Text variant="subtitle1" className="mb-6">
              XP: {skill.data.xp}
            </Text>
          </Grid>
        </GridItem>
      )}
    </>
  );
};
export default SkillCard;
