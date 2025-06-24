import { useGetProducts } from "../connect/useGetProducts";
import { getUniqueCategory } from "../utils/get-unique-category";
import { Header } from "../components/header";
import { SideBar } from "../components/side-bar";
import { Outlet } from "react-router";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";

export const Products = () => {
  const { data } = useGetProducts();
  const { categories } = getUniqueCategory();

  if (!data || data.length === 0) {
    return <div className="text-center text-gray-500">No products found.</div>;
  }
  console.log(categories);
  return (
    <motion.div
      className="flex flex-col h-screen bg-yellow-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <SideBar />

        <main className="flex-1 overflow-hidden p-4">
          <div className="h-full grid-cols-3 overflow-y-auto rounded-xl bg-white shadow-md p-4">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </motion.div>
  );
};
