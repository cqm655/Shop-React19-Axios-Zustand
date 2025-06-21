import { useEffect, useState } from "react";
import { apiClient } from "./api-client";
import { ApiResponse, Products } from "./types";

export const useGetProducts = () => {
  const [data, setData] = useState<Products[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<ApiResponse<Products[]>>(
          "/products?limit=194",
        );
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return { data };
};
