import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { SideBar } from "../components/side-bar";
import { Outlet } from "react-router";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-4 bg-gray-100 rounded-xl ml-2">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
