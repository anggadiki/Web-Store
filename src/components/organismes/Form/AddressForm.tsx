import Input from "@/components/molecules/Input";
import Link from "next/link";

const AddressForm = () => {
  return (
    <div className=" w-[676px] rounded-2xl bg-white p-8">
      <form action="GET " className="flex flex-col gap-5">
        <Input title="Shipping Name" placeholder="Jhon Maker" />
        <Input title="Street Name" placeholder="123 Plae Grond Stret" />
        <Input title="City" placeholder="Vermout" />
        <Input title="State/Provinci" placeholder="California" />
        <Input title="Country" placeholder="United States of America" />
        <div className=" flex gap-2 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Checkbox-Input">
              <rect
                id="Checkbox-Input_2"
                x="1"
                y="1"
                width="16"
                height="16"
                rx="2"
                stroke="#60695C"
                strokeLinejoin="round"
              />
              <rect
                id="Inner"
                x="3"
                y="3"
                width="12"
                height="12"
                rx="1"
                fill="#12805D"
              />
            </g>
          </svg>
          <p className=" text-lg text-[#1A1F1680]">
            Save this as your default address
          </p>
        </div>
        <div className=" w-full py-4">
          <button className=" w-full bg-black text-white py-2 px-6 rounded-xl">
            Add Address
          </button>
        </div>
        <div className=" w-full flex justify-between items-end">
          <Link href={"/checkout"}>
            <p className=" text-[#1A1F1680] underline">Back</p>
          </Link>
          <div className=" flex gap-2 items-end">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon">
                <path
                  id="Vector"
                  d="M17.25 9.5H16.5V5.75C16.5 4.55653 16.0259 3.41193 15.182 2.56802C14.3381 1.72411 13.1935 1.25 12 1.25C10.8065 1.25 9.66193 1.72411 8.81802 2.56802C7.97411 3.41193 7.5 4.55653 7.5 5.75V9.5H6.75C5.95462 9.50087 5.19206 9.81722 4.62964 10.3796C4.06722 10.9421 3.75087 11.7046 3.75 12.5V20.75C3.75087 21.5454 4.06722 22.3079 4.62964 22.8704C5.19206 23.4328 5.95462 23.7491 6.75 23.75H17.25C18.0454 23.7491 18.8079 23.4328 19.3704 22.8704C19.9328 22.3079 20.2491 21.5454 20.25 20.75V12.5C20.2491 11.7046 19.9328 10.9421 19.3704 10.3796C18.8079 9.81722 18.0454 9.50087 17.25 9.5ZM15 9.5H9V5.75C9 4.95435 9.31607 4.19129 9.87868 3.62868C10.4413 3.06607 11.2044 2.75 12 2.75C12.7956 2.75 13.5587 3.06607 14.1213 3.62868C14.6839 4.19129 15 4.95435 15 5.75V9.5Z"
                  fill="#02D693"
                />
              </g>
            </svg>
            <p className=" text-[#02D693]">Secure Connection</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
