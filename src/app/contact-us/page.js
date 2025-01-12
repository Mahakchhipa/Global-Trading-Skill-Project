import Banner from "@/components/Banner";
import ContactForm from "@/components/Home/ContactForm";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <Banner
        heading="Contact Us"
        bgImage=" /assets/contact-us-banner-image.webp"
      />
      <ContactForm />
    </>
  );
}
