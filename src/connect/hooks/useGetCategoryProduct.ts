import { useEffect, useState } from "react";
import { apiClient } from "../api-client";
import { Products } from "../types";

export const useGetCategoryProduct = (category: string) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/products/category/" + category);
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return { data };
};
