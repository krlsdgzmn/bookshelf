import axios, { AxiosError } from "axios";
import { useState } from "react";
import type { Book } from "../types";

export function useBrowse() {
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

  return {
    query,
    books,
    isLoading,
    error,
    handleSearch,
    hasSearched,
    setQuery,
  };
}
