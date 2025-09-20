import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  authorStyle,
  cardActionStyle,
  cardContentStyle,
  cardStyle,
  publishStyle,
  titleStyle,
} from "../styles/bookCardStyles";
import type { Book } from "../types";

interface BookCardProps {
  book: Book;
}

export default function BookCard(props: BookCardProps) {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
      <Card sx={cardStyle}>
        <CardActionArea sx={cardActionStyle}>
          <CardMedia
            component="img"
            height="140"
            image="https://placehold.co/800"
          />

          <CardContent sx={cardContentStyle}>
            <Typography gutterBottom component={"span"} sx={titleStyle}>
              {props.book.title}
            </Typography>
            <Typography variant="body2" sx={authorStyle} noWrap>
              {`by ${props.book.author_name.flat().join(", ")}`}
            </Typography>

            <Typography variant={"caption"} sx={publishStyle}>
              {`Published ${props.book.first_publish_year}`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
