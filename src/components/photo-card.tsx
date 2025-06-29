import { motion } from "framer-motion";

type CardProps = {
  img: string;
  name: string;
  description: string;
};

export const PhotoCard = ({ img, name, description }: CardProps) => {
  return (
    <motion.div
      className="relative group  overflow-hidden z-[1] "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-800 after:opacity-90 opacity-20 transition-opacity duration-500 ease-in-out group-hover:opacity-90 z-10">
        <div className="absolute bottom-2/4 left-2 p-2  opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="flex items-center justify-center bg-orange-600 h-10 w-10 hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="white"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
              />
            </svg>
          </button>
        </div>
      </div>

      <img
        src={img}
        alt="PhotoCard image"
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 z-0"
      />

      <div className="absolute bottom-0 left-0 p-4 text-white z-20 ">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};
