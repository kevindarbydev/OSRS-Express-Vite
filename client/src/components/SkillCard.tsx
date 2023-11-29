
import ProgressBar from "./ProgressBar";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "right",
//     backgroundColor: "lightgrey",
//     width: "170px",
//     height: "220px",
//   },
//   img: {
//     float: "left",
//     marginTop: "3rem",
//   },
// }));

interface Props {
  skill: {
    name: string;
    data: {
      rank: number;
      level: number;
      xp: number;
    };
  };
}

const SkillCard = ({ skill }: Props) => {
  const classes = useStyles();
  //
  return (
    <>
      <Grid xs={4} md={2} key={skill.name}>
        {skill.name !== "overall" ? (
          <Box className={classes.paper}>
            <Image
              src={`/skill-icons/${skill.name}_icon.png`}
              alt={`${skill.name} icon`}
              className={classes.img}
              width={26}
              height={34}
            />
            <Text fontSize="h6">{skill.name}</Text>
            <Text variant="subtitle1" className="opacity-60">
              Rank: <span className="opacity-100">{skill.data.rank}</span>
            </Text>
            <Text variant="subtitle1" className="opacity-60">
              Level: <span className="opacity-100">{skill.data.level}</span>
            </Text>
            <Text variant="subtitle1" className="opacity-60">
              XP: <span className="opacity-100">{skill.data.xp}</span>
            </Text>
            <ProgressBar xp={skill.data.xp} level={skill.data.level} />
          </Box>
        ) : (
          <Box className={classes.paper}>
            <Text variant="h6">{skill.name}</Text>
            <Text variant="subtitle1">Rank: {skill.data.rank}</Text>
            <Text variant="subtitle1">
              Level: {skill.data.level}
            </Text>
            <Text variant="subtitle1" className="mb-6">
              XP: {skill.data.xp}
            </Text>
          </Box>
        )}
      </Grid>
    </>
  );
};
export default SkillCard;
