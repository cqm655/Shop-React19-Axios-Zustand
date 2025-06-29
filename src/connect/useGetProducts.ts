import { ApiResponse, Products } from "./types";
import { useEffect, useState } from "react";
import { apiClient } from "./api-client";

export const useGetProducts = (): Products[] => {
  const [data, setData] = useState<Products[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<ApiResponse<Products[]>>(
          "/products?limit=194",
        );
        setData(response.data.products);
        return response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return data;
};
