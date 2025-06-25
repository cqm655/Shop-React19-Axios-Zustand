import { motion } from "framer-motion";

type CardProps = {
  img: string;
  name: string;
  description: string;
};

export const Card = ({ img, name, description }: CardProps) => {
  return (
    <motion.div
      className="container h-full bg-yellow-50  text-2xl hover:opacity-20 mb-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex-1  justify-center hover:opacity-10 ">
        <img className=" object-cover" src={img} alt={"Card image"} />
      </div>
    </motion.div>
  );
};
