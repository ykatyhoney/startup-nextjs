import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Culture from "@/components/Culture";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import UseCases from "@/components/UseCases";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make Your Business AI-First",
  description: "Transform your business with AI-driven solutions. Reduce costs, increase efficiency, and automate workflows.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Services />
      <UseCases />
      <Culture />
      <Leadership />
      <Testimonials />
      <Contact />
    </>
  );
}
