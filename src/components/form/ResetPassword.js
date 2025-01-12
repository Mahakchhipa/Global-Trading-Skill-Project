import Link from "next/link";

export default function ResetPassword() {
  return (
    <div className="p-[20px] xl:px-[100px] lg:py-[40px]">
    <div
      className="bg-[#1E1C1D] max-w-[825px] h-auto rounded-[36px] mx-auto px-[40px] py-[50px]"
      style={{ boxShadow: "0px 4px 99px 0px rgba(229, 204, 19, 0.5)" }}
    >
      <form className="flex flex-col gap-6">
        <h2 className="text-white text-center text-2xl font-bold mb-4">
          Reset Your Password
        </h2>
  
        {/* New Password */}
        <input
          type="password"
          placeholder="Enter New Password"
          className="w-full p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
        />
  
        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full p-3 bg-[#2D2C2E] text-white rounded-lg border border-[#6F7078] focus:outline-none focus:ring-2 focus:ring-[#E5CC13]"
        />
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-[#E5CC13] text-black font-bold rounded-lg hover:bg-[#d4b312] transition"
        >
          Reset Password
        </button>
  
        {/* Additional Links */}
        <div className="text-center text-sm text-gray-400 mt-4">
          <p>
            Remembered your password?{" "}
            <a href="/login" className="text-[#E5CC13] hover:underline">
              Login
            </a>
          </p>
          <p>
            <a href="/" className="text-[#E5CC13] hover:underline">
              Back to Website
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
  
  );
}
