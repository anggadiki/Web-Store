const Search = () => {
  return (
    <div className="font-cabin w-[507px]">
      <p className=" text-[#60695C] py-2">Search Item</p>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        className=" bg-white text-lg w-full py-2 pl-6 rounded-xl placeholder:text-lg placeholder:font-medium"
      />
    </div>
  );
};

export default Search;
