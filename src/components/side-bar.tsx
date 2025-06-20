import { useFetchProducts } from "../connect/useFetchProducts";
import { useCategoryProduct } from "../connect/useCategoryProduct";

export const SideBar = () => {
  const { data: products } = useFetchProducts();
  if (products) {
    console.log(products.map((data) => data));
  }

  const { data: categoryProducts } = useCategoryProduct("smartphones");
  if (categoryProducts) {
    console.log(categoryProducts.map((data) => data));
  }

  return (
    <div className="w-80 p-2 border-solid border-4 text-black rounded-xl"></div>
  );
};
