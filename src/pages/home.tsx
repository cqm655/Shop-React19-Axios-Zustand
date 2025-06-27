import { motion } from "framer-motion";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Card } from "../components/card";
import ReactPlayer from "react-player";

export const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
    >
      <Header />

      <main className="flex-1 py-6">
        <div className="justify-center text-center mb-10  ">
          <motion.h1
            className="text-4xl font-bold text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Products
          </motion.h1>
          <motion.div
            className="border-t border-gray-400"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeIn" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-2xl font-bold text-gray-700 mt-[40px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              For HER
            </motion.p>
          </motion.div>
        </div>
        <div className="grid grid-cols-6 grid-rows-2 gap-0  mx-auto">
          <div className="row-span-2 col-span-2 ...">
            {" "}
            <Card
              name={`Titlu 1`}
              img="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop"
              description="lorem ipsum"
            />{" "}
          </div>{" "}
          <div className="row-span-1 col-span-1 ...">
            {" "}
            <Card
              name={`Titlu 2`}
              img="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop"
              description="lorem ipsum"
            />{" "}
          </div>
          <div className="col-span-1 row-span-1 ...">
            {" "}
            <Card
              name={`Titlu 3`}
              img="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop"
              description="lorem ipsum"
            />{" "}
          </div>{" "}
          <div className="col-span-2 row-span-2 ...">
            {" "}
            <Card
              name={`Titlu 4`}
              img="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop"
              description="lorem ipsum"
            />{" "}
          </div>{" "}
          <div className="col-start-3 col-span-1 ...">
            {" "}
            <Card
              name={`Titlu 5`}
              img="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop"
              description="lorem ipsum"
            />{" "}
          </div>{" "}
          <div className="col-start-4 col-span-1 ...">
            {" "}
            <Card
              name={`Titlu 6`}
              img="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop"
              description="lorem ipsum"
            />{" "}
          </div>
        </div>

        <div className="justify-center text-center mb-10 mt-10 ">
          <motion.div
            className="border-t border-gray-400"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeIn" }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-2xl font-bold text-gray-700 mt-[40px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              For HIM
            </motion.p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
          {[...Array(6)].map((_, index) => (
            <Card
              key={index}
              name={`Titlu ${index + 1}`}
              img="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop"
              description="lorem ipsum"
            />
          ))}
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};
