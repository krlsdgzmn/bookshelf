import axios, { AxiosError } from "axios";
import { useState } from "react";
import type { Book } from "../types";

export function useRandom() {
  const [randomBooks, setRandomBooks] = useState<Book[]>([]);
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(-1);
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
  return {
    randomBooks,
    subjects,
    currentSubjectIndex,
    fetchRandomBooks,
    isLoading,
    error,
  };
}
