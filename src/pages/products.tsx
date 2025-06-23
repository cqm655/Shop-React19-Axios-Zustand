import { useGetProducts } from "../connect/useGetProducts";

export const Products = () => {
  const { data } = useGetProducts();
  return (
    <div className="p-2 ml-2 ">
      {data.map((item) => {
        return (
          <li key={item.id}>
            <ul>{item.stock}</ul>
          </li>
        );
      })}
    </div>
  );
};
