import Banner from "@/components/Banner";
import ForgotPassword from "@/components/form/ForgotPassword";

export default function Login() {
  return (
    <>
      <Banner
        heading="Forgot Password"
        bgImage="/assets/form-page-banner-image.webp"
        showPara={false}
      />
      <ForgotPassword />{" "}
    </>
  );
}
