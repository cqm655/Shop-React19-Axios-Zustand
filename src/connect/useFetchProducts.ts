import { useEffect, useState } from "react";
import { apiClient } from "./api-client";

export const useFetchProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/products?limit=194");
        setData(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return { data };
};
