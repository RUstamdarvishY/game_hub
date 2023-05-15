import axios, { AxiosRequestConfig } from "axios";
import { GameQuery } from "../App";

export interface GetResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "213a7c909dc5430788c898484513e5d8",
  },
});

class ApiClient<T> {
  endpoint: string;
  params: GameQuery | undefined;

  constructor(endpoint: string, params?: GameQuery) {
    this.endpoint = endpoint;
    this.params = params;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<GetResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
  };
}

export default ApiClient;
