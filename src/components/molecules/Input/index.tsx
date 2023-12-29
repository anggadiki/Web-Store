type Props = {
  title?: string;
  placeholder?: string;
  type?: string;
};
const Input = ({ title, placeholder, type = "text" }: Props) => {
  return (
    <div className=" font-cabin flex flex-col px-2 gap-2 text-[#1A1F1680]">
      <p className="px-2">{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        className=" py-2 px-4 text-lg shadow-lg rounded-xl placeholder:text-lg placeholder:font-semibold"
      />
    </div>
  );
};

export default Input;
