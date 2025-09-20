import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import type { Book } from "../types";

const trendingUrl = "https://openlibrary.org/trending/daily.json";
const subjectUrl = "https://openlibrary.org/search.json";

export function useFetch() {
  const [daily, setDaily] = useState<Book[]>([]);
  const [fiction, setFiction] = useState<Book[]>([]);
  const [science, setScience] = useState<Book[]>([]);
  const [history, setHistory] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      axios.get(trendingUrl, { params: { limit: 12 } }),
      axios.get(subjectUrl, { params: { limit: 6, subject: "fiction" } }),
      axios.get(subjectUrl, { params: { limit: 6, subject: "science" } }),
      axios.get(subjectUrl, { params: { limit: 6, subject: "history" } }),
    ])
      .then(([dailyRes, fictionRes, scienceRes, historyRes]) => {
        setDaily(dailyRes.data.works);
        setFiction(fictionRes.data.docs);
        setScience(scienceRes.data.docs);
        setHistory(historyRes.data.docs);
        console.log(dailyRes.data);
        console.log(fictionRes.data);
        console.log(scienceRes.data);
        console.log(historyRes.data);
      })
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { daily, fiction, science, history, isLoading, error };
}
