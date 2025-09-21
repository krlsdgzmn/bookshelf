import Star from "@mui/icons-material/Star";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios, { AxiosError } from "axios";
import { useState } from "react";
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
import type { Book, BookDetails } from "../types";
import BookDetailsDialog from "./BookDetailsDialog";

interface BookCardProps {
  book: Book;
  isTrending: boolean;
  index: number;
}

export default function BookCard(props: BookCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookDetails, setBookDetails] = useState<BookDetails | undefined>(
    undefined,
  );
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleOnClick() {
    setIsLoading(true);
    setIsOpen(true);

    axios({
      url: `https://openlibrary.org${props.book.key}.json`,
      method: "GET",
    })
      .then((res) => setBookDetails(res.data))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <>
      <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
        <Card sx={cardStyle}>
          <CardActionArea onClick={handleOnClick} sx={cardActionStyle}>
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
              image={
                props.book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`
                  : props.book.cover_id
                    ? `https://covers.openlibrary.org/b/id/${props.book.cover_id}-M.jpg`
                    : "https://placehold.co/800"
              }
              alt={props.book.title}
            />

            <CardContent sx={cardContentStyle}>
              <Typography gutterBottom component={"span"} sx={titleStyle}>
                {props.book.title}
              </Typography>
              <Typography variant="body2" sx={authorStyle} noWrap>
                {Array.isArray(props.book.author_name)
                  ? `By ${props.book.author_name.join(", ")}`
                  : Array.isArray(props.book.authors)
                    ? `By ${props.book.authors.map((a) => a.name).join(", ")}`
                    : "Unknown author"}
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

      <BookDetailsDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        book={props.book}
        bookDetails={bookDetails}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
