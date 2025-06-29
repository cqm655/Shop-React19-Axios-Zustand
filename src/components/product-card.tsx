import { motion } from "framer-motion";
import { Products } from "../connect/types";

type ProductCardProps = {
  data: Products;
};

export const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border-2 w-[250px] h-[400px] rounded-xl relative hover:cursor-pointer"
    >
      <img src={`${data.thumbnail}`} alt={"imge"} />
    </motion.div>
  );
};
