import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();


    setLoading(true)
    ApiClient.get<GamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      }).
      finally(() => setLoading(false))
        

    return controller.abort();
  }, []);

  return { games, error, loading };
};

export default useGames;
