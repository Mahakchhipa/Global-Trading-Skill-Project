import Banner from "@/components/Banner";
import RegistrationForm from "@/components/form/RegistrationForm";

export default function Login() {
  return (
    <>
      <Banner
        heading="Registration"
        bgImage="/assets/form-page-banner-image.webp"
        showPara={false}
      />
      <RegistrationForm />
    </>
  );
}
