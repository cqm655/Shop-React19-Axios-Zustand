import { motion } from "framer-motion";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Card } from "../components/card";

export const Home = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />

      <main className="flex-1 px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
          {[...Array(19)].map((_, index) => (
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
