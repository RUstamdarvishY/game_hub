import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";

interface ScreenShots {
  id: number;
  image: string;
  width: number;
  height: number;
}

const useScreenShots = (gameId: number) => {
  const apiClient = new ApiClient<ScreenShots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
