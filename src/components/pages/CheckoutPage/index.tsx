import CheckoutItem from "@/components/templates/CheckoutItems";

const CheckoutPage = () => {
  return (
    <div className=" grid grid-cols-12 min-h-screen justify-items-center bg-[#EDEDED]">
      <div className=" col-span-8">
        <CheckoutItem />
      </div>
      <div className=" col-span-4">
        <p>heloo</p>
      </div>
    </div>
  );
};

export default CheckoutPage;
