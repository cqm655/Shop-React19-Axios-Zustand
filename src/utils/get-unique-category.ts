import { useGetProducts } from "../connect/useGetProducts";

export const GetUniqueCategory = () => {
  const { data } = useGetProducts();

  const categories = data
    ? [...new Set(data.map((item) => item.category))]
    : [];

  return { categories };
};
