import Navbar from "@/components/molecules/Nav";
import Bag from "@/components/organismes/Bag";
import Product from "@/components/templates/Product";

const DashboardPage = () => {
  return (
    <div className=" bg-[#EDEDED] grid grid-cols-12">
      <Navbar />
      <div className=" col-span-8">
        <Product />
      </div>
      <div className=" relative col-span-3">
        <Bag />
      </div>
    </div>
  );
};

export default DashboardPage;
