import { Grid } from "@chakra-ui/react";
import SkillCard from "./SkillCard";

interface Props {
  skillsData: {
    [key: string]: {
      rank: number;
      level: number;
      xp: number;
    };
  };
  rsn: string;
}
const SkillsGrid = ({ skillsData, rsn }: Props) => {
  return (
    <Grid
      marginTop={4}
      marginLeft={12}
      marginRight={12}
      h="750px"
      templateColumns="repeat(8, 1fr)"
      templateRows="repeat(4,1fr)"
      gap={6}
    >
      <>
        {Object.entries(skillsData).map(([skillName, skillData]) => (
          <SkillCard
            key={skillName}
            rsn={rsn}
            skill={{ name: skillName, data: skillData }}
          />
        ))}
      </>
    </Grid>
  );
};
export default SkillsGrid;
