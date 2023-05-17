import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: {480: string, max: string};
}

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
