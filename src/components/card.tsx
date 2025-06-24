import { motion } from "framer-motion";

type CardProps = {
  img: string;
  name: string;
  description: string;
};

export const Card = ({ img, name, description }: CardProps) => {
  return (
    <motion.div
      className="container  bg-yellow-50 h-[400px]  text-2xl "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="Card-Title text-center ">{name}</div>
      <div className="flex  justify-center">
        <img
          className="w-[250px] h-[250px] object-cover"
          src={img}
          alt={"Card image"}
        />
      </div>
      <div className="text-center text-xl">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};
