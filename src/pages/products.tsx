import { useGetProducts } from "../connect/useGetProducts";
import { GetUniqueCategory } from "../utils/get-unique-category";
import { Header } from "../components/header";
import { SideBar } from "../components/side-bar";
import { Outlet } from "react-router";
import { Footer } from "../components/footer";

export const Products = () => {
  const { data } = useGetProducts();
  const { categories } = GetUniqueCategory();

  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500">No products found.</div>;
  }
  console.log(categories);
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <main className="flex-1 overflow-hidden p-4">
          <div className="h-full overflow-y-auto rounded-xl bg-white shadow-md p-4">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
