import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";

interface GetResponse<T>{
    count: number;
    results: T[]
}


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      // const controller = new AbortController();
  
      setLoading(true);
      ApiClient.get<GetResponse<T>>(endpoint, {...requestConfig})//{ signal: controller.signal })
        .then((response) => setData(response.data.results))
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
        })
        .finally(() => setLoading(false));
  
      // return controller.abort();
    }, deps ? [...deps] : []);
  
    return { data, error, loading };
  };
  
  export default useData;
  