import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { sectionTitleStyle } from "../styles/sectionStyles";
import BookCard from "./BookCard";

interface SectionProps {
  title: string;
}

export default function Section(props: SectionProps) {
  return (
    <Box component={"section"}>
      <Typography variant="h5" sx={sectionTitleStyle}>
        {props.title}
      </Typography>

      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2 }}
        columnSpacing={{ xs: 1, sm: 2 }}
      >
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <BookCard key={i} index={++i} />
          ))}
      </Grid>
    </Box>
  );
}
