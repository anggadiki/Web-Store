import PaymentCard from "@/components/organismes/PaymentCard";
import ShippingCard from "@/components/organismes/ShippingCard";

const CheckoutItem = () => {
  return (
    <div className=" w-full flex flex-col py-10 gap-6">
      <ShippingCard />
      <PaymentCard />
    </div>
  );
};

export default CheckoutItem;
