import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import FetchError from "../components/FetchError";
import Section from "../components/Section";
import { buttonStyle, pageBoxStyle } from "../styles/globalStyles";
import {
  headerStyle,
  subtitleStyle,
  titleStyle,
} from "../styles/randomPageStyles";
import type { Book } from "../types";

export default function RandomPage() {
  const [randomBooks, setRandomBooks] = useState<Book[]>([]);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const subjects = [
    "Fiction",
    "Science",
    "History",
    "Mystery",
    "Romance",
    "Fantasy",
    "Biography",
    "Adventure",
    "Thriller",
    "Comedy",
    "Drama",
    "Poetry",
  ];

  function fetchRandomBooks() {
    setIsLoading(true);
    setError("");
    const nextIndex = (currentSubjectIndex + 1) % subjects.length;
    setCurrentSubjectIndex(nextIndex);
    const subject = subjects[nextIndex];

    axios({
      url: "https://openlibrary.org/search.json",
      method: "GET",
      params: { limit: 12, subject: subject.toLowerCase() },
    })
      .then((res) => setRandomBooks(res.data.docs))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setIsLoading(false));
  }

  if (!isLoading && error) return <FetchError error={error} />;

  return (
    <Box sx={pageBoxStyle}>
      <Box sx={headerStyle}>
        <Typography sx={titleStyle}>
          Don&apos;t know what to read next?
        </Typography>

        <Typography sx={subtitleStyle}>
          Let us choose a book at random from our collection.
        </Typography>

        <Button variant="contained" onClick={fetchRandomBooks} sx={buttonStyle}>
          Surprise Me
        </Button>
      </Box>

      <Section
        title={
          randomBooks.length > 0 ? `${subjects[currentSubjectIndex]} Books` : ""
        }
        books={randomBooks}
        isLoading={isLoading}
        isTrendingSection={false}
      />
    </Box>
  );
}
