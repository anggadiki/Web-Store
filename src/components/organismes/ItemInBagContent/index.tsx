import ItemBag from "@/components/molecules/ItemBag";

const BagInItemContent = () => {
  return (
    <div className=" font-cabin">
      <div className="">
        <p className=" text-5xl text-black">Check your Bag Items</p>
      </div>
      <div className=" grid grid-rows-1 mt-9 gap-6">
        <ItemBag src="/product-2.png" title="Dell XPS 13" />
        <ItemBag title="Aplle Watch" color="black" />
      </div>
    </div>
  );
};

export default BagInItemContent;
