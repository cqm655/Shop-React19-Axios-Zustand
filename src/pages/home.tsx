// Home.tsx

import { Header } from "../components/header";

export const Home = () => {
  return (
    <div className=" h-[100vh] bg-yellow-100 overflow-hidden">
      <Header />
      <section className=" ">
        <div className="text-center ">
          <p className="font-sans text-3xl font-semibold text-gray-600/100 dark:text-gray-400/100 underline underline-offset-1">
            OUR PRODUCTS
          </p>
        </div>
      </section>
    </div>
  );
};
