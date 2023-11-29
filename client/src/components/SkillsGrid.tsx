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
}
const SkillsGrid = ({ skillsData }: Props) => {
  return (
    <Grid margin="0 2rem 0 rem" h='400px' templateColumns="repeat(8, 1fr)" templateRows="repeat(4,1fr)" gap={6}>
      <>
        {Object.entries(skillsData).map(([skillName, skillData]) => (
          <SkillCard
            key={skillName}
            skill={{ name: skillName, data: skillData }}
          />
        ))}
      </>
    </Grid>
  );
};
export default SkillsGrid;
