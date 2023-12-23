import Botton from "@/components/molecules/Botton";
import Image from "next/image";

const Bag = () => {
  return (
    <>
      <div className="">
        <div className=" pt-14 h-max absolute">
          <hr className=" h-screen border-[3px] rounded-lg border-[#1A1F1680]" />
        </div>
        <div className=" w-full flex justify-center pt-20">
          <p className=" font-cabin text-4xl font-semibold">Bag</p>
        </div>
        <div className="grid grid-cols-3 justify-items-center gap-4 mt-[18px] px-10">
          <div className=" w-20 h-auto bg-white rounded-xl">
            <Image
              src="/product.png"
              alt="product"
              width={191.36}
              height={232}
              className=" w-full h-full"
            />
          </div>{" "}
          <div className=" w-20 h-auto bg-white rounded-xl">
            <Image
              src="/product.png"
              alt="product"
              width={191.36}
              height={232}
              className=" w-full h-full"
            />
          </div>{" "}
          <div className=" w-20 h-auto bg-white rounded-xl">
            <Image
              src="/product.png"
              alt="product"
              width={191.36}
              height={232}
              className=" w-full h-full"
            />
          </div>{" "}
          <div className=" w-20 h-auto bg-white rounded-xl">
            <Image
              src="/product.png"
              alt="product"
              width={191.36}
              height={232}
              className=" w-full h-full"
            />
          </div>
        </div>
        <div className=" w-full flex justify-center mt-10">
          <Botton />
        </div>
      </div>
    </>
  );
};

export default Bag;
