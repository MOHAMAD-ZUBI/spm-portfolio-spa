import Image from "next/image";
import HeroSection from "./components/Main/Hero";
import Features from "./components/Main/Features";
import Services from "./components/Main/Services";
import ContactForm from "./components/Main/Contact";

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-100 space-y-32 pb-16">
      <HeroSection />
      <Features />
      <Services />
      <ContactForm />
    </div>
  );
}
