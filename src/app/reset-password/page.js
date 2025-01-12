import Banner from "@/components/Banner";
import ResetPassword from "@/components/form/ResetPassword";


export default function Login() {
  return (
    <>
      <Banner
        heading="Registration"
        bgImage="/assets/form-page-banner-image.webp"
        showPara={false}
      />
  <ResetPassword/>
    </>
  );
}
