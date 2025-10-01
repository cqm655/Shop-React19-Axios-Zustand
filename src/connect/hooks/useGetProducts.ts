import { ApiResponse, Products } from "../types";
import { useEffect, useState } from "react";
import { apiClient } from "../api-client";

export const useGetProducts = () => {
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<ApiResponse<Products[]>>(
          "/products?limit=100",
        );
        setData(response.data.products);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};
