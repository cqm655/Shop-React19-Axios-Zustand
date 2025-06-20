import { apiClient } from "./api-client";

export const fetchProducs = async () => {
  try {
    return await apiClient.get("/").then((res) => res.data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchSearchProducs = async () => {
  try {
    return await apiClient.get("/search?=");
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchCategoryProduct = async () => {
  try {
    return await apiClient.get("/category/");
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
