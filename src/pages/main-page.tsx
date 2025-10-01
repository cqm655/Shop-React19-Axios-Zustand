import { Outlet } from "react-router";
import { motion } from "framer-motion";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useCart } from "../store/use-cart";
import { Cart } from "./cart";

export const MainPage = () => {
  const isOpen = useCart((state) => state.isOpen);
  console.log(isOpen);
  return (
    <motion.div
      className="flex flex-col bg-white scrollbar-glass "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isOpen && <Cart />}
      <Header />
      <Outlet />
      <Footer />
    </motion.div>
  );
};
