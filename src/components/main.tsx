import { SideBar } from "./side-bar";
import { MainContent } from "./main-content";

export const Main = () => {
  return (
    <main className="grow h-10  p-2 flex flex-col-2">
      <SideBar />
      <MainContent />
    </main>
  );
};
