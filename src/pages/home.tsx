import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { SideBar } from "../components/side-bar";
import { Outlet } from "react-router";

export const Home = () => {
  return (
    <div className=" flex flex-col bg-gray-300 ">
      <Header />
      <div className="mt-2 bg-red-400 flex ">
        <SideBar />

        <div className="p-2 ">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};
