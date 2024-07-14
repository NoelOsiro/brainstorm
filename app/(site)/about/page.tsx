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
  title: "About Page | Brainstorm Children's Centre",
  description: " Brainstorm Junior Children's Centre, Kibera. A place where children learn, play and grow together.",
  openGraph: {
    title: "About Page | Brainstorm Children's Centre",
    description: " Brainstorm Junior Children's Centre, Kibera. A place where children learn, play and grow together.",
    url: "https://brainstormcentre.co.ke/about",
    siteName: "Brainstorm Junior Children's Centre",
    images: [
      {
        url: "https://brainstormcentre.co.ke/images/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://brainstormcentre.co.ke/images/og-alt.png", // Must be an absolute URL
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
