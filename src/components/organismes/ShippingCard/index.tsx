const ShippingCard = () => {
  return (
    <div className=" w-full bg-white font-cabin rounded-xl">
      <div className="w-[871px] p-4">
        <p className=" text-3xl uppercase tracking-[0.2em]">Shipping Address</p>
        <div className=" flex items-start justify-between pt-4">
          <div className=" text-xl flex flex-col gap-1">
            <p> John Maker</p>
            <p> 123 Plae Grond Stret</p>
            <p> Vermont, California</p>
            <p>United States of America</p>
          </div>
          <button className=" border border-black px-6 py-2 rounded-xl">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShippingCard;
