import { Metadata } from "next";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact/index_new";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import AboutHero from "@/components/About/AboutHero";

export const metadata: Metadata = {
  title: "About Us | Brainstorm Children's Centre",
  description: "Learn about Brainstorm Junior Children's Centre in Kibera. Discover our mission, vision, values, and the dedicated team working to empower children through education and care.",
  openGraph: {
    title: "About Us | Brainstorm Children's Centre",
    description: "Learn about Brainstorm Junior Children's Centre in Kibera. Discover our mission, vision, values, and the dedicated team working to empower children through education and care.",
    url: "https://brainstormcentre.co.ke/about",
    siteName: "Brainstorm Junior Children's Centre",
    images: [
      {
        url: "https://brainstormcentre.co.ke/images/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://brainstormcentre.co.ke/images/og-alt.png",
        width: 1800,
        height: 1600,
        alt: `Brainstorm Junior Children's Centre`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // other metadata
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <About />
      <FeaturesTab />
      <Team />
      <FunFact />
      <Testimonial />
      <FAQ />
      <CTA />
    </main>
  );
}
