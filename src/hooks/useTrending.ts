import axios from "axios";
import { useEffect, useState } from "react";
import type { Book } from "../types";

export function useTrending() {
  const [data, setData] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios({
      url: "https://openlibrary.org/trending/daily.json",
      method: "GET",
      params: {
        limit: 12,
      },
    })
      .then((res) => setData(res.data.works))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}
