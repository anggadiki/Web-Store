import Navbar from "@/components/molecules/Nav";
import Bag from "@/components/organismes/Bag";
import BagItems from "@/components/templates/BagItems";

const BagPage = () => {
  return (
    <div className=" grid grid-cols-12 bg-[#EDEDED]">
      <Navbar />
      <div className=" col-span-8">
        <BagItems />
      </div>
      <div className=" col-span-3">
        <Bag />
      </div>
    </div>
  );
};

export default BagPage;
