import { useFetchProducts } from "../connect/useFetchProducts";

export const SideBar = () => {
  const { data } = useFetchProducts();
  if (data) {
    console.log(data.map((data) => data.availabilityStatus));
  }

  return (
    <div className="w-80 p-2 border-solid border-4 text-black rounded-xl"></div>
  );
};
