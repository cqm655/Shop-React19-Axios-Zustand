import { useEffect, useState } from "react";
import { apiClient } from "./api-client";

export const useCategoryProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/category/");
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return { data };
};