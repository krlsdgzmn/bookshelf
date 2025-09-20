import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

interface BookCardProps {
  index: number;
}

export default function BookCard(props: BookCardProps) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
      <Item>{props.index}</Item>
    </Grid>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  height: "260px",
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
