import Botton from "@/components/molecules/Botton";
import Image from "next/image";

const ProductDetailContent = () => {
  return (
    <div className=" mt-12 mr-12">
      <div className=" font-cabin">
        <div className=" flex gap-2 items-center font-cabin text-xl font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <p>Back</p>
        </div>
        <div className=" grid grid-cols-10 pt-4">
          <div className=" col-span-4">
            <div className=" grid grid-cols-12">
              <div className=" col-span-2 flex flex-col gap-4">
                <div className=" w-12 h-auto bg-white rounded-xl">
                  <Image
                    src="/product.png"
                    alt="product"
                    width={91.36}
                    height={632}
                    className=" bg-cover"
                  />
                </div>
                <div className=" w-12 h-auto bg-white rounded-xl">
                  <Image
                    src="/product.png"
                    alt="product"
                    width={91.36}
                    height={632}
                    className=" bg-cover"
                  />
                </div>
                <div className=" w-12 h-auto bg-white rounded-xl">
                  <Image
                    src="/product.png"
                    alt="product"
                    width={91.36}
                    height={632}
                    className=" bg-cover"
                  />
                </div>
              </div>
              <div className=" col-span-10">
                <div className=" w-60 h-auto bg-white rounded-xl">
                  <Image
                    src="/product.png"
                    alt="product"
                    width={1001.36}
                    height={632}
                    className=" object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-6">
            <div className=" font-cabin pt-5">
              <p className=" text-5xl font-bold">Apple Watch</p>
              <p className=" text-3xl text-[#1A1F1680] pt-2">Series 5 SE</p>
            </div>
            <div className=" pt-5 flex gap-6 items-start">
              <div className=" flex gap-2 items-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Star-01">
                    <path
                      id="Vector"
                      d="M19.1244 22.5C18.9665 22.5006 18.8125 22.4514 18.6842 22.3594L12.6556 17.9888L6.62703 22.3594C6.49823 22.4528 6.34306 22.5028 6.18395 22.5023C6.02485 22.5017 5.87005 22.4505 5.74193 22.3562C5.61382 22.2618 5.51903 22.1292 5.47127 21.9774C5.42351 21.8256 5.42525 21.6626 5.47624 21.5119L7.82749 14.5477L1.73375 10.3688C1.60175 10.2783 1.50213 10.1481 1.44944 9.99702C1.39674 9.84595 1.39374 9.682 1.44086 9.5291C1.48799 9.3762 1.58277 9.24238 1.71137 9.14719C1.83996 9.052 1.99563 9.00043 2.15562 9.00001H9.67343L11.9422 2.01798C11.9911 1.86724 12.0864 1.73586 12.2146 1.64267C12.3428 1.54949 12.4972 1.4993 12.6556 1.4993C12.8141 1.4993 12.9685 1.54949 13.0966 1.64267C13.2248 1.73586 13.3202 1.86724 13.3691 2.01798L15.6378 9.00236H23.1556C23.3158 9.00228 23.4718 9.05349 23.6008 9.1485C23.7298 9.24351 23.8249 9.37731 23.8724 9.53033C23.9198 9.68334 23.917 9.84751 23.8643 9.99881C23.8117 10.1501 23.712 10.2806 23.5798 10.3711L17.4837 14.5477L19.8336 21.51C19.8717 21.6227 19.8824 21.7429 19.8648 21.8606C19.8473 21.9782 19.802 22.0901 19.7327 22.1868C19.6634 22.2835 19.5721 22.3624 19.4663 22.4168C19.3606 22.4713 19.2433 22.4998 19.1244 22.5Z"
                      fill="#12805D"
                    />
                  </g>
                </svg>{" "}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Star-01">
                    <path
                      id="Vector"
                      d="M19.1244 22.5C18.9665 22.5006 18.8125 22.4514 18.6842 22.3594L12.6556 17.9888L6.62703 22.3594C6.49823 22.4528 6.34306 22.5028 6.18395 22.5023C6.02485 22.5017 5.87005 22.4505 5.74193 22.3562C5.61382 22.2618 5.51903 22.1292 5.47127 21.9774C5.42351 21.8256 5.42525 21.6626 5.47624 21.5119L7.82749 14.5477L1.73375 10.3688C1.60175 10.2783 1.50213 10.1481 1.44944 9.99702C1.39674 9.84595 1.39374 9.682 1.44086 9.5291C1.48799 9.3762 1.58277 9.24238 1.71137 9.14719C1.83996 9.052 1.99563 9.00043 2.15562 9.00001H9.67343L11.9422 2.01798C11.9911 1.86724 12.0864 1.73586 12.2146 1.64267C12.3428 1.54949 12.4972 1.4993 12.6556 1.4993C12.8141 1.4993 12.9685 1.54949 13.0966 1.64267C13.2248 1.73586 13.3202 1.86724 13.3691 2.01798L15.6378 9.00236H23.1556C23.3158 9.00228 23.4718 9.05349 23.6008 9.1485C23.7298 9.24351 23.8249 9.37731 23.8724 9.53033C23.9198 9.68334 23.917 9.84751 23.8643 9.99881C23.8117 10.1501 23.712 10.2806 23.5798 10.3711L17.4837 14.5477L19.8336 21.51C19.8717 21.6227 19.8824 21.7429 19.8648 21.8606C19.8473 21.9782 19.802 22.0901 19.7327 22.1868C19.6634 22.2835 19.5721 22.3624 19.4663 22.4168C19.3606 22.4713 19.2433 22.4998 19.1244 22.5Z"
                      fill="#12805D"
                    />
                  </g>
                </svg>{" "}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Star-01">
                    <path
                      id="Vector"
                      d="M19.1244 22.5C18.9665 22.5006 18.8125 22.4514 18.6842 22.3594L12.6556 17.9888L6.62703 22.3594C6.49823 22.4528 6.34306 22.5028 6.18395 22.5023C6.02485 22.5017 5.87005 22.4505 5.74193 22.3562C5.61382 22.2618 5.51903 22.1292 5.47127 21.9774C5.42351 21.8256 5.42525 21.6626 5.47624 21.5119L7.82749 14.5477L1.73375 10.3688C1.60175 10.2783 1.50213 10.1481 1.44944 9.99702C1.39674 9.84595 1.39374 9.682 1.44086 9.5291C1.48799 9.3762 1.58277 9.24238 1.71137 9.14719C1.83996 9.052 1.99563 9.00043 2.15562 9.00001H9.67343L11.9422 2.01798C11.9911 1.86724 12.0864 1.73586 12.2146 1.64267C12.3428 1.54949 12.4972 1.4993 12.6556 1.4993C12.8141 1.4993 12.9685 1.54949 13.0966 1.64267C13.2248 1.73586 13.3202 1.86724 13.3691 2.01798L15.6378 9.00236H23.1556C23.3158 9.00228 23.4718 9.05349 23.6008 9.1485C23.7298 9.24351 23.8249 9.37731 23.8724 9.53033C23.9198 9.68334 23.917 9.84751 23.8643 9.99881C23.8117 10.1501 23.712 10.2806 23.5798 10.3711L17.4837 14.5477L19.8336 21.51C19.8717 21.6227 19.8824 21.7429 19.8648 21.8606C19.8473 21.9782 19.802 22.0901 19.7327 22.1868C19.6634 22.2835 19.5721 22.3624 19.4663 22.4168C19.3606 22.4713 19.2433 22.4998 19.1244 22.5Z"
                      fill="#12805D"
                    />
                  </g>
                </svg>{" "}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Star-01">
                    <path
                      id="Vector"
                      d="M19.1244 22.5C18.9665 22.5006 18.8125 22.4514 18.6842 22.3594L12.6556 17.9888L6.62703 22.3594C6.49823 22.4528 6.34306 22.5028 6.18395 22.5023C6.02485 22.5017 5.87005 22.4505 5.74193 22.3562C5.61382 22.2618 5.51903 22.1292 5.47127 21.9774C5.42351 21.8256 5.42525 21.6626 5.47624 21.5119L7.82749 14.5477L1.73375 10.3688C1.60175 10.2783 1.50213 10.1481 1.44944 9.99702C1.39674 9.84595 1.39374 9.682 1.44086 9.5291C1.48799 9.3762 1.58277 9.24238 1.71137 9.14719C1.83996 9.052 1.99563 9.00043 2.15562 9.00001H9.67343L11.9422 2.01798C11.9911 1.86724 12.0864 1.73586 12.2146 1.64267C12.3428 1.54949 12.4972 1.4993 12.6556 1.4993C12.8141 1.4993 12.9685 1.54949 13.0966 1.64267C13.2248 1.73586 13.3202 1.86724 13.3691 2.01798L15.6378 9.00236H23.1556C23.3158 9.00228 23.4718 9.05349 23.6008 9.1485C23.7298 9.24351 23.8249 9.37731 23.8724 9.53033C23.9198 9.68334 23.917 9.84751 23.8643 9.99881C23.8117 10.1501 23.712 10.2806 23.5798 10.3711L17.4837 14.5477L19.8336 21.51C19.8717 21.6227 19.8824 21.7429 19.8648 21.8606C19.8473 21.9782 19.802 22.0901 19.7327 22.1868C19.6634 22.2835 19.5721 22.3624 19.4663 22.4168C19.3606 22.4713 19.2433 22.4998 19.1244 22.5Z"
                      fill="#12805D"
                    />
                  </g>
                </svg>{" "}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Star-01">
                    <path
                      id="Vector"
                      d="M19.1244 22.5C18.9665 22.5006 18.8125 22.4514 18.6842 22.3594L12.6556 17.9888L6.62703 22.3594C6.49823 22.4528 6.34306 22.5028 6.18395 22.5023C6.02485 22.5017 5.87005 22.4505 5.74193 22.3562C5.61382 22.2618 5.51903 22.1292 5.47127 21.9774C5.42351 21.8256 5.42525 21.6626 5.47624 21.5119L7.82749 14.5477L1.73375 10.3688C1.60175 10.2783 1.50213 10.1481 1.44944 9.99702C1.39674 9.84595 1.39374 9.682 1.44086 9.5291C1.48799 9.3762 1.58277 9.24238 1.71137 9.14719C1.83996 9.052 1.99563 9.00043 2.15562 9.00001H9.67343L11.9422 2.01798C11.9911 1.86724 12.0864 1.73586 12.2146 1.64267C12.3428 1.54949 12.4972 1.4993 12.6556 1.4993C12.8141 1.4993 12.9685 1.54949 13.0966 1.64267C13.2248 1.73586 13.3202 1.86724 13.3691 2.01798L15.6378 9.00236H23.1556C23.3158 9.00228 23.4718 9.05349 23.6008 9.1485C23.7298 9.24351 23.8249 9.37731 23.8724 9.53033C23.9198 9.68334 23.917 9.84751 23.8643 9.99881C23.8117 10.1501 23.712 10.2806 23.5798 10.3711L17.4837 14.5477L19.8336 21.51C19.8717 21.6227 19.8824 21.7429 19.8648 21.8606C19.8473 21.9782 19.802 22.0901 19.7327 22.1868C19.6634 22.2835 19.5721 22.3624 19.4663 22.4168C19.3606 22.4713 19.2433 22.4998 19.1244 22.5Z"
                      fill="#12805D"
                    />
                  </g>
                </svg>
              </div>
              <p className=" text-xl text-[#12805D] font-medium">5 / 5</p>
            </div>
            <div className=" pt-2">
              <p className=" text-2xl font-medium">$ 529.99</p>
            </div>
            <div className=" py-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pellentesque tellus imperdiet mattis. Proin in quis ipsum non
                amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc
                volutpat, tincidunt lorem mi duis. Vitae elementum libero.
              </p>
            </div>
            <div className=" flex justify-end">
              <Botton>Add To Bag</Botton>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full py-6">
            <hr className=" w-full border-[3px] border-[#1A1F1680] rounded-lg" />
          </div>
          <div className="">
            <p className=" text-3xl font-medium">Description</p>
            <p className=" text-[#60695C] text-xl py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
              odio faucibus nec malesuada purus volutpat vel sed viverra. Id
              sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus
              pellentesque sagittis. Felis rhoncus facilisis massa eget purus in
              purus. Etiam at cras nulla nunc. Malesuada in pretium diam
              scelerisque sit mattis in egestas neque. Eu porta tempor sodales
              nisl integer turpis porttitor sed sed. Ut senectus odio dictum
              enim velit tempor diam quisque suspendisse.
              <br /> Orci vel ridiculus diam viverra. Libero malesuada orci,
              quis placerat suscipit augue imperdiet. Et praesent augue dictum
              mauris eget lacus malesuada. Aenean nisi, sodales natoque massa
              magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam
              sit viverra enim. Id id placerat eu etiam nulla laoreet.
              <br /> Dignissim leo fames turpis quis suspendisse vulputate
              laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras
              a aliquam phasellus sollicitudin ornare. Tristique volutpat
              facilisis in ut proin. Est vitae facilisi sollicitudin id lorem
              mattis nibh ipsum, nec. Consectetur consectetur morbi morbi
              aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit
              risus.
              <br /> Odio phasellus nibh senectus nec id enim quam sed. At
              potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et
              adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at
              facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae
              etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut
              feugiat varius risus eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContent;
