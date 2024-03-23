import { useState } from "react";
import Burger from "../assets/hero-2.png";

//For react-rating
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const ProductSnippet = () => {
  return (
    <div className='p-2rounded flex gap-2 items-center'>
      <figure className='size-16 rounded'>
        <img
          src={Burger}
          alt='product-item'
          className='size-full object-cover'
        />
      </figure>
      <div className=''>
        <h4 className='text-sm font-semibold'>Product name</h4>
        <Rating
          style={{ maxWidth: 75 }}
          value={3.7}
          readOnly={true}
          className='-ml-[3px] '
        />
        <span className='text-sm'>{30}</span>
      </div>
    </div>
  );
};

export default ProductSnippet;
