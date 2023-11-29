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
    <Grid>
      {Object.entries(skillsData).map(([skillName, skillData]) => (
        <>
          <SkillCard
            key={skillName}
            skill={{ name: skillName, data: skillData }}
          />
        </>
      ))}
    </Grid>
  );
};
export default SkillsGrid;
