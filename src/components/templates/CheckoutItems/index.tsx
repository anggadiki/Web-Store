import ItemBag from "@/components/molecules/ItemBag";
import PaymentCard from "@/components/organismes/PaymentCard";
import ShippingCard from "@/components/organismes/ShippingCard";

const CheckoutItem = () => {
  return (
    <div className=" w-full flex flex-col py-10 gap-6">
      <ShippingCard />
      <PaymentCard />
      <div className=" bg-white rounded-xl p-4">
        <p className=" font-cabin text-3xl uppercase tracking-[0.2em]">
          Review You Bag
        </p>
        <ItemBag src="/product.png" title="Apple Watch" />
        <hr className=" border border-[#1A1F1680]" />
        <ItemBag src="/product-2.png" title="Dell XPS 13" />
      </div>
    </div>
  );
};

export default CheckoutItem;
