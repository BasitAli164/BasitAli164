"use client";
import { useState } from "react";

// export const metadata={
//     title:"Products"
// }

const data = [
  { title: "Cake", price: 200, btn: "Order Now" },
  { title: "Papaar", price: 100, btn: "Order Now" },
  { title: "Choclate", price: 500, btn: "Order Now" },
];
const Product = () => {
  const [product, setProduct] = useState(data);
  console.log(product);
  return (
    <div className="w-full h-screen p-10">
      {product.map((item, index) => {
        <div id={index} className="border-2 border-white border-solid"></div>;
      })}
    </div>
  );
};

export default Product;
