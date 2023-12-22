import Search from "@/components/molecules/Search";
import CardProduct from "@/components/organismes/CardProduct";

const Product = () => {
  return (
    <>
      <div className=" p-6">
        <div className=" flex justify-center pb-10">
          <Search />
        </div>
        <div className=" w-full gap-10 grid grid-cols-4">
          <div className=" flex justify-center">
            <CardProduct />
          </div>
          <div className=" flex justify-center">
            <CardProduct />
          </div>
          <div className=" flex justify-center">
            <CardProduct />
          </div>
          <div className=" flex justify-center">
            <CardProduct />
          </div>
          <div className=" flex justify-center">
            <CardProduct />
          </div>
          <div className=" flex justify-center">
            <CardProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
