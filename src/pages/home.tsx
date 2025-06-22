import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { SideBar } from "../components/side-bar";
import { Outlet } from "react-router";

export const Home = () => {
  return (
    <div className=" flex flex-col bg-gray-500 ">
      <Header />

      <SideBar />

      <main className="flex-1 relative mt-[-32%] p-4 ml-[25%] bg-gray-100 rounded-xl mr-4 scroll-auto ">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
