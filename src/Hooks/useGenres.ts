import { CanceledError } from "axios";
import ApiClient from "../services/ApiClient";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface GenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    ApiClient.get<GenresResponse>("/genres", { signal: controller.signal })
      .then((response) => setGenres(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => setLoading(false));

    return controller.abort();
  }, []);

  return { genres, error, loading };
};

export default useGenres;
