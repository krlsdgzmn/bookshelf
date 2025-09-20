import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import FetchError from "../components/FetchError";
import Section from "../components/Section";
import { buttonStyle, pageBoxStyle } from "../styles/globalStyles";
import {
  headerStyle,
  noBooksFoundStyle,
  searchBoxStyle,
  subtitleStyle,
  textFieldStyle,
  titleStyle,
} from "../styles/randomPageStyles";
import type { Book } from "../types";

export default function BrowsePage() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  function handleSearch() {
    if (!query.trim()) return;

    setIsLoading(true);
    setError("");
    setHasSearched(true);

    axios({
      url: "https://openlibrary.org/search.json",
      method: "GET",
      params: { limit: 24, q: query },
    })
      .then((res) => setBooks(res.data.docs))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setIsLoading(false));
  }

  if (!isLoading && error) return <FetchError error={error} />;

  return (
    <Box sx={pageBoxStyle}>
      <Box sx={headerStyle}>
        <Typography sx={titleStyle}>Uncover Your Next Favorite</Typography>

        <Typography sx={subtitleStyle}>
          Search for books by title, author, or keyword.
        </Typography>

        <Box sx={searchBoxStyle}>
          <TextField
            placeholder="Enter search query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            variant="standard"
            sx={textFieldStyle}
          />
          <Button variant="contained" onClick={handleSearch} sx={buttonStyle}>
            Search
          </Button>
        </Box>
      </Box>

      <Section
        title={books.length > 0 ? `Search Results for "${query}"` : ""}
        books={books}
        isLoading={isLoading}
        isTrendingSection={false}
      />

      {!isLoading && hasSearched && books.length === 0 && !error && (
        <Typography sx={noBooksFoundStyle}>
          No books found for "{query}". Try a different search.
        </Typography>
      )}
    </Box>
  );
}
