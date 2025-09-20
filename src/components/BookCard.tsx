import Star from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  authorStyle,
  cardActionStyle,
  cardContentStyle,
  cardStyle,
  publishStyle,
  ratingStyle,
  starStyle,
  titleStyle,
  trendingStyle,
} from "../styles/bookCardStyles";
import type { Book } from "../types";

interface BookCardProps {
  book: Book;
  isTrending: boolean;
  index: number;
}

export default function BookCard(props: BookCardProps) {
  return (
    <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
      <Card sx={cardStyle}>
        <CardActionArea sx={cardActionStyle}>
          {props.isTrending && (
            <Chip
              label={`#${props.index} Trending`}
              size="small"
              sx={trendingStyle}
            />
          )}

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

            <Typography variant={"caption"} sx={ratingStyle}>
              <Star fontSize="inherit" sx={starStyle} />{" "}
              {(Math.round(Math.random() * 40 + 10) / 10).toFixed(1)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
