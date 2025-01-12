import Icons from "./Icons";
import Image from "next/image";
import phone from "../../../public/assets/icons/phone-icon.svg";
import email from "../../../public/assets/icons/email-icon.svg";
import location from "../../../public/assets/icons/location-icon.svg";
export default function ContactForm() {
  return (
    <div className="px-[20px] xl:pl-[160px] 2xl:pl-[200px]">
      <div className=" mx-auto flex lg:flex-row flex-col gap-6 ">
        <div className="flex flex-col gap-8 py-[40px]">
          <div className="flex flex-col gap-8">
            <div className="secondary-data">
              <h2>Let’s Get in Touch With Us</h2>
            </div>
            <Icons />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-[#F5F7FC] flex items-center justify-center">
                <Image src={phone} alt="phone" />
              </div>
              <div>
                <p>0917749254</p>
                <p> 0983888611</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-[#F5F7FC] flex items-center justify-center">
                <Image src={email} alt="email" />
              </div>
              <div>
                <p>Bitrader@gmail.com </p>
                <p>hello@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full bg-[#F5F7FC] flex items-center justify-center">
                <Image src={location} alt="location" />
              </div>
              <div>
                <p>88 Sheridan Street</p>
                <p>534 Victoria Trail</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-full w-full flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/form-svg-vector.svg')" }}
        >
          <form className="w-full max-w-xl p-6  bg-opacity-80 shadow-md rounded-lg  my-10 lg:my-24  xl:m-16 2xl:m-32 flex flex-col gap-6 xl:gap-12 2xl:gap-[60px] h-full">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-800 focus:outline-none "
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-800 focus:outline-none "
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-800 focus:outline-none "
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E5CC13] text-black rounded-lg py-2  focus:outline-none "
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
