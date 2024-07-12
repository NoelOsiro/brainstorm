import { Metadata } from "next";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Brainstorm Children's Centre",
  description: "Brainstorm Junior Children Centre, Kibera",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Team />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
    </main>
  );
}