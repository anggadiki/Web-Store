import Navbar from "@/components/molecules/Nav";
import Product from "@/components/templates/Product";

const DashboardPage = () => {
  return (
    <div className=" bg-[#EDEDED] min-h-screen grid grid-cols-12">
      <Navbar />
      <div className=" col-span-8">
        <Product />
      </div>
    </div>
  );
};

export default DashboardPage;
