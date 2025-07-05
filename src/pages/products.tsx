import { Header } from "../components/header";
import { SideBar } from "../components/side-bar";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import { useGetProducts } from "../connect/useGetProducts";
import { ProductCard } from "../components/product-card";

export const Products = () => {
  const { data, loading, error } = useGetProducts();

  return (
    <motion.div
      className="flex flex-col h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />

      <main className="flex flex-1 overflow-hidden p-4 bg-gray-200 mt-4">
        <SideBar />
        <div className=" h-full  w-full relative  overflow-y-auto rounded-xl bg-white shadow-md grid grid-cols-1 p-4 gap-4 ml-2 mr-2 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item) => {
            return <ProductCard data={item} key={item.id} loading={loading} />;
          })}
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};
