import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="p-[20px] xl:px-[100px] lg:py-[40px]">
      <div
        className="bg-[#1E1C1D] max-w-[825px] h-auto rounded-[36px] mx-auto px-[40px] py-[50px]"
        style={{ boxShadow: "0px 4px 99px 0px rgba(229, 204, 19, 0.5)" }}

      >
        <form className="flex flex-col gap-6">
          <h2 className="text-white text-center text-2xl font-bold mb-4">
            Forgot Password
          </h2>

          {/* Email ID */}
          <input
            type="email"
            placeholder="Enter E-mail ID"
            className="w-full p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#E5CC13] text-black font-bold rounded-lg hover:bg-[#d4b312] transition"
          >
            Send Reset Link
          </button>

          {/* Additional Options */}
          <div className="text-center text-sm text-gray-400 mt-4">
            <p>
              Remember your password?{" "}
              <Link href="/login" className="text-[#E5CC13] hover:underline">
                Login
              </Link>
            </p>
            <p>
              <Link href="/" className="text-[#E5CC13] hover:underline">
                Back to Website
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
