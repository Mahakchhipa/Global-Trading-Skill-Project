import Banner from "@/components/Banner";
import LoginForm from "@/components/form/LoginForm";

export default function Login() {
  return (
    <>
      <Banner
        heading="Log In"
        bgImage="/assets/form-page-banner-image.webp"
        showPara={false}
      />
      <LoginForm />
    </>
  );
}
