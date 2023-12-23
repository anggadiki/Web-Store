import Navbar from "@/components/molecules/Nav";
import Bag from "@/components/organismes/Bag";
import ProductDetail from "@/components/templates/ProductDetail";

const ItemViewPage = () => {
  return (
    <div className=" bg-[#EDEDED] grid grid-cols-12">
      <Navbar />
      <div className=" col-span-8">
        <ProductDetail />
      </div>
      <div className=" relative col-span-3">
        <Bag />
      </div>
    </div>
  );
};

export default ItemViewPage;
