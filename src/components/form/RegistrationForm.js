import Link from "next/link";

export default function RegistrationForm() {
  return (
    <div className="p-[20px] xl:px-[100px] lg:py-[40px]">
      <div
        className="bg-[#1E1C1D] max-w-[825px] h-auto rounded-[36px] mx-auto px-[40px] py-[50px]"
        style={{ boxShadow: "0px 4px 99px 0px rgba(229, 204, 19, 0.5)" }}

      >
        <form className="flex flex-col gap-6">
     
          {/* Sponsor ID and Name */}
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Enter Sponsor ID"
              className="flex-1 p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
            />
            <input
              type="text"
              placeholder="Enter Name"
              className="flex-1 p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
            />
          </div>

          {/* Sponsor Name and Mobile No */}
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="Sponsor Name"
              className="flex-1 p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
            />
            <input
              type="text"
              placeholder="Enter Mobile No."
              className="flex-1 p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
            />
          </div>

          {/* Email ID and Password */}
          <div className="flex flex-wrap gap-4">
            <input
              type="email"
              placeholder="Enter E-mail ID"
              className="flex-1 p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="flex-1 p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#E5CC13] text-black font-bold rounded-lg hover:bg-[#d4b312] transition"
          >
            Register
          </button>
          {/* Additional Options */}
          <div className="text-center  mt-4 flex flex-col gap-3">
            <p className="text-sm ">Not signed up yet? </p>
            <p className="text-base">
              <Link href="/log-in" className="hover:underline font-bold">
                Login
              </Link>
            </p>
            <p className="text-base">
              <Link
                href="/forgot-password"
                className="hover:underline font-bold"
              >
                Forget Password
              </Link>
            </p>
            <p className="text-base">
              <Link href="/" className="hover:underline font-bold">
                Back to Website
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
