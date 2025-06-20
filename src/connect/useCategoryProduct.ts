import { useEffect, useState } from "react";
import { apiClient } from "./api-client";

type Category = {
  category: string;
};

export const useCategoryProduct = (category: Category) => {
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
