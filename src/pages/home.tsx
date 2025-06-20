import { Header } from "../components/header";
import { Main } from "../components/main";
import { Footer } from "../components/footer";

export const Home = () => {
  return (
    <section className="flex flex-col h-screen min-w-[800px]">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};
