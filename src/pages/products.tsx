import { useGetProducts } from "../connect/useGetProducts";

export const Products = () => {
  const { data } = useGetProducts();
  return data.map((item) => {
    return (
      <li key={item.id}>
        <ul>{item.stock}</ul>
      </li>
    );
  });
};
