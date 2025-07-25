"use client";
import { useRouter } from "next/router";
import { useState } from "react";
 

// export const metadata={
//     title:"Products"
// }

const data = [
  { title: "Cake", price: 200, btn: "Order Now" },
  { title: "Papaar", price: 100, btn: "Order Now" },
  { title: "Choclate", price: 500, btn: "Order Now" },
];
const Product = ({params}) => {
    const router=useRouter()

    const orderNow=async()=>{
        const id=await params;
        router.push(`product/${id}`)
    }
  
  return (
    <div className="w-full h-screen p-10 flex justify-center items-center gap-5 ">
      {data.map((item, index) => (
        <div id={index} className="border-2 border-white border-solid w-72 h-80 p-5  flex flex-col justify-center items-center gap-10 rounded-lg  bg-red-500 ">
            <div>
                <p className="">Product Name:{item.title}</p>
            <p>Product Price:{item.price}</p>
            </div>
            <div>
                <button className="px-8 py-4 bg-amber-600 font-bold rounded-xl cursor-pointer" onClick={orderNow}>{item.btn}</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
