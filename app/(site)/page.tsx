import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Brainstorm Junior Children's Centre",
  description: "Brainstorm Junior Children's Centre, Kibera. A place where children learn, play and grow together.",
  openGraph: {
    title: "Brainstorm Junior Children's Centre",
    description: "Brainstorm Junior Children's Centre, Kibera. A place where children learn, play and grow together.",
    url: 'https://brainstormcentre.co.ke/',
    siteName: "Brainstorm Junior Children's Centre",
    images: [
      {
        url: 'https://brainstormcentre.co.ke/images/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://brainstormcentre.co.ke/images/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: `Brainstorm Junior Children's Centre`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Contact />
      <Blog />
    </main>
  );
}
