import Link from "next/link";

const OrderSummary = () => {
  return (
    <>
      <div className=" py-10">
        <div className="bg-white w-64 rounded-xl ">
          <div className=" p-4 font-cabin flex flex-col gap-4">
            <p className=" text-xl font-medium">Order Summary</p>
            <div className=" flex justify-between text-[#60695C]">
              <p>Items:</p>
              <p>$ 529.99</p>
            </div>{" "}
            <div className=" flex justify-between text-[#60695C]">
              <p>Shipping:</p>
              <p>$ 29.99</p>
            </div>
            <div className=" flex justify-between text-[#60695C]">
              <p>Estimated GST:</p>
              <p>$ 69.99</p>
            </div>{" "}
            <div className=" flex justify-between text-[#60695C]">
              <p>Gift Card:</p>
              <p>$ 0.0</p>
            </div>
            <hr className="border w-full" />
            <div className=" flex justify-between text-[#E5252C] font-medium text-xl">
              <p>Order Total:</p>
              <p>$ 729.99</p>
            </div>
            <hr className="border w-full" />
            <button className=" w-full bg-[#1A1F16] rounded-[11px]">
              <p className=" text-white py-2">Place your order</p>
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-end">
        <Link href={"/bag"}>
          <button className=" flex gap-2 border border-[#1A1F16] px-6 py-2 rounded-[11px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon">
                <path
                  id="Vector"
                  d="M15.375 5.25L8.625 12L15.375 18.75"
                  stroke="#1A1F16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <p>Back</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default OrderSummary;
