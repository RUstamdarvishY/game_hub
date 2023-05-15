import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/ApiClient";


const apiClient = new ApiClient<Genre>('/genres')

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000 // 24h
});


export default useGenres;
