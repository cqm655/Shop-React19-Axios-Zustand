import { Outlet } from "react-router";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import { SideBar } from "../components/side-bar";
import { ProductCard } from "../components/product-card";
import { Footer } from "../components/footer";

export const MainPage = () => {
  return (
    <motion.div
      className="flex flex-col h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />

      <Outlet />

      <Footer />
    </motion.div>
  );
};
