import React from "react";

const EmailTemplate = () => {
  return (
    <div className=" flex justify-center items-center bg-[#1b1e1f]">
      <div className="w-1/2  bg-gray-900 text-[#e9e9e9] border-[7px] border-solid border-red-800 ">
        <div className="p-20  text-center">
          <h1 className="text-4xl font-bold text-[#3092ea] ">
            Order Confirmed!
          </h1>
          <p className="text-md mt-3">Thanks for your order, [Customer Name]</p>
        </div>
        <div className="relative">
          <hr className="rotate-90 w-56 h-[6px] bg-[#3092ea]  absolute top-28 left-[-110px]" />
          <div className="bg-[#1c1f20] p-10 flex flex-col gap-10">
            <div>
              <h3 className="text-3xl font-semibold">Order #[Order Number]</h3>
              <p className="text-xl mt-2">Placed on [Order Date]</p>
            </div>
            <strong className="font-bold text-3xl text-[#3092ea]">
              Total: $[Total Amount]
            </strong>
          </div>
        </div>
        <div className="p-10 w-full">
          <p className="text-[#3092ea] font-bold text-xl">Your Item</p>
          <div className="p-10 flex flex-col gap-14">
            <div className="flex justify-between ">
              <div>
                <p className="font-bold text-2xl">[Product Name 1]</p>
                <p className="text-xl">Qty: 1 • [Product Code]</p>
              </div>
              <div>
                <p className="text-2xl font-bold">$[Price]</p>
              </div>
            </div>
            <div className="flex justify-between ">
              <div>
                <p className="font-bold text-2xl">[Product Name 2]</p>
                <p className="text-xl">Qty: 1 • [Product Code]</p>
              </div>
              <div>
                <p className="text-2xl font-bold">$[Price]</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-xl">
                <p>Subtotal:</p>
                <p>Shipping:</p>
                <p>Tax:</p>
              </div>
              <div className="text-xl">
                <p>$[Subtotal]</p>
                <p>$[Shipping]</p>
                <p> $[Tax]</p>
              </div>
            </div>
            <hr className="bg-[#3092ea] h-[3px] " />
            <div className="flex justify-between font-bold text-2xl text-[#3092ea]">
              <p>Total:</p>
              <p>$[Total]</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-10 gap-5">
          <div>
            <h3 className="font-bold text-2xl text-[#3092ea] mb-3">
              📦 Shipping to:
            </h3>
            <p className="text-lg mt-1">[Customer Name]</p>
            <p className="text-lg mt-1">[Street Address]</p>
            <p className="text-lg mt-1">[City, State ZIP]</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-[#3092ea] mb-3">
              🚚 Delivery:
            </h3>
            <p className="text-lg mt-1">[Shipping Method]</p>
            <p className="text-lg mt-1">Estimated: [Delivery Date]</p>
          </div>
        </div>
        <div className="p-8 text-center bg-[#1b1e1f]">
          <button className="px-16 py-4 bg-[#3092ea] rounded-md text-xl font-bold my-10">
            Take Your Order
          </button>
          <p className="text-md text-[#e9e9e9]">
            We'll email you when your order ships
          </p>
        </div>
        <div className="text-center p-20">
          <p className="text-xl font-bold text-[#3092ea]">Questions?</p>
          <p className="text-lg my-5">
            Email us at{" "}
            <span className="text-[#3092ea]">support@yourstore.com </span>or
            call 1-800-123-4567
          </p>
        </div>

        <div className="p-10 bg-[#3092ea] text-center">
          <p className="text-xl">Thanks for shopping with us! 🙏</p>
          <p className="mt-10">© 2024 Your Company Name </p>
          <p className="underline">Unsubscribe</p>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;
