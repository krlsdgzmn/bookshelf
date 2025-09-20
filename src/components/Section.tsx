import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { sectionTitleStyle } from "../styles/sectionStyles";
import type { Book } from "../types";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";

interface SectionProps {
  title: string;
  books: Book[];
  isTrendingSection: boolean;
  isLoading: boolean;
}

export default function Section(props: SectionProps) {
  return (
    <Box component={"section"}>
      <Typography sx={sectionTitleStyle}>{props.title}</Typography>

      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2 }}
        columnSpacing={{ xs: 1, sm: 2 }}
      >
        {props.isLoading && (
          <BookCardSkeleton isTrendingSection={props.isTrendingSection} />
        )}

        {!props.isLoading &&
          props.books &&
          props.books.map((book, i) => <BookCard key={i} book={book} />)}
      </Grid>
    </Box>
  );
}
