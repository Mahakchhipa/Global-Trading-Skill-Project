import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="p-[20px] xl:px-[100px] lg:py-[40px]">
      <div
        className="bg-[#1E1C1D] max-w-[825px] h-auto rounded-[36px] mx-auto px-[40px] py-[50px]"
        style={{ boxShadow: "0px 4px 99px 0px rgba(229, 204, 19, 0.5)" }}

      >
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter UserCode"
            className="w-full p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
          />
          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#E5CC13] text-black font-bold rounded-lg hover:bg-[#d4b312] transition"
          >
            Login
          </button>
          {/* Additional Options */}
          <div className="text-center  mt-4 flex flex-col gap-3">
            <p className="text-sm ">Not signed up yet? </p>
            <p className="text-base">
              <Link href="/register" className=" hover:underline font-bold">
                Register
              </Link>
            </p>
            <p className="text-base">
              <Link
                href="/forgot-password"
                className="  hover:underline font-bold"
              >
                Forget Password
              </Link>
            </p>
            <p className="text-base">
              <Link href="/" className="  hover:underline font-bold">
                Back to Website
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
