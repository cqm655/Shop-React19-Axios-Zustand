import { motion } from "framer-motion";
import { Products } from "../connect/types";
import { useState } from "react";
import { inStockBar } from "../utils/instock-pogress-bar";

type ProductCardProps = {
  data: Products;
  loading: boolean;
};

export const ProductCard = ({ data, loading }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  const remainingStock = inStockBar(data.stock);

  const fallbackImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6bYHOX1opjcFv9ivh5G5KMcnVn52i1Ou-CcBeftQHM7EkChseimtimE&s";

  if (loading) {
    return (
      <div className="border-2 flex items-center justify-center w-[250px] h-[400px] rounded-xl relative hover:cursor-pointer">
        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-gray-700 bg-gray-200 rounded-full animate-pulse dark:bg-gray-900 dark:text-gray-200">
          Se încarcă...
        </div>
      </div>
    );
  }
  console.log(data);
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="border-2 w-[250px] h-[400px] rounded-xl relative hover:cursor-pointer"
    >
      <div className="image-container w-full h-[230px]">
        <img
          src={imageError ? fallbackImage : data?.thumbnail}
          onError={() => setImageError(true)}
          alt="product"
          className="w-[250px] p-2 h-[250px] object-cover rounded-xl"
        />
      </div>
      <div className="product-details-container flex-1 flex flex-col  justify-center p-4">
        <div className="h-[45px]">
          <span className="font-bold ">{data.title}</span>
        </div>
        <div>
          <span className="self-start text-gray-400">Brand: {data.brand}</span>
        </div>
        <div className="stock-container flex  flex-1 align-baseline">
          <div>
            <span>Stock: </span>
          </div>

          <div className="stock-bar w-[150px] mt-2 ml-2 flex bg-gray-200 rounded-full h-0 mb-4 dark:bg-gray-200">
            <div
              className=" h-2.5 rounded-full dark:bg-green-100"
              style={{
                width: `${remainingStock?.width}`,
                backgroundColor: `${remainingStock?.color}`,
              }}
            ></div>
          </div>
        </div>
        <div className="rating-container">
          <div className="flex self-start flex-1  w-full">
            <span className="flex flex-1">
              Rating:{" "}
              <div className="flex flex-1 items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                  {data.rating}
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  {data.reviews.length}
                </a>
              </div>
            </span>
          </div>
        </div>
        <div className="price-conainer">
          <div className="flex self-start items-center flex-1 w-full space-between">
            <span className="font-bold ">Price: {data.price}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
