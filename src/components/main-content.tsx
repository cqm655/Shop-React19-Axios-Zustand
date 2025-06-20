import { Outlet } from "react-router";

export const MainContent = () => {
  return (
    <div className="p-3 w-full ml-2 text-black rounded-xl border-solid border-4">
      <Outlet />
    </div>
  );
};
