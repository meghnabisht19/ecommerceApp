import { useEffect, useState } from "react";
import RatingStars from "./RatingStars";
import { motion } from "framer-motion";
import AddToCartButton from "./AddToCartButton";
interface props {
  ProductTitle: string;
  ProductImage: string;
  Description: string;
  Rating: number;
  RatedUsers: number;
  Price: Number;
  currency: string;
}

const ProductCard = (props: props) => {

  return (
    <div className="flex relative flex-col">
      <div
        className="flex overflow-hidden group 
     bg-[#F5F6F6] rounded-lg mb-4"
      >
        {/* product image */}
        <div className="flex flex-grow  m-6 justify-center hover:scale-125 transition transform-gpu duration-150 delay-75 ease-in items-center">
          <img
            src={props.ProductImage}
            className="object-contain self-center "
            width={"90%"}
            height={"90%"}
          />
        </div>

        {/* like button */}
        <div className="flex p-6 absolute right-8 top-0">
          <div className="absolute z-50 flex-grow w-full h-full bg-red-transparent peer" />
          <div className="flex items-center justify-center peer-hover:bg-[#F9DCDC]  bg-white rounded-full absolute h-full w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 z-10"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              stroke="#4F4F4F"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>

       
      </div>

      {/* product details */}
      <div className="px-1 mb-3">
      <div className="flex justify-between">
        <p className="font-semibold text-lg">{props?.ProductTitle}</p>
        <div className="flex">
          <p className="font-bold text-sm">$</p>
          <p className="font-bold text-lg">{`${props?.Price}`}</p>
          <p className="font-bold text-sm">.00</p>
        </div>
      </div>
      <p className="font-light text-xs mb-1">{props?.Description}</p>
      <RatingStars rating={props?.Rating} ratedUsers={props?.RatedUsers}/>
      </div>
      <AddToCartButton/>

     
    </div>
  );
};

export default ProductCard;
