import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
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
import SectionHeader from "@/components/Common/SectionHeader";
import Donate from "@/components/Donate";

export const metadata: Metadata = {
  title: "Privacy Policy - Brainstorm Children's Centre",
  description: "Privacy and Data policy for Brainstorm Children's Centre.",
  // other metadata
};

export default function Privacy() {
  return (
    <main>
      <>
      {/* <!-- ===== Donate Start ===== --> */}
      <section id='programs' className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1315 px-4 md:px-8 xl:mt-20 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Thank You",
              subtitle: "Thank you for your wonderful support.",
              description: `
                On behalf of Brainstorm Junior Children Centre, we extend our heartfelt gratitude for your generosity and kindness. Your support makes a significant impact in the lives of the children we serve.
              `,
            }}
          />
          {/* <!-- Section Title End --> */}
          <div className="mt-12.5 lg:mt-15 xl:mt-20 xl:gap-12.5">
            {/* <!-- Donate Component Start --> */}
            <Donate/>
          </div>
        </div>
      </section>
      {/* <!-- ===== Donate End ===== --> */}
      <Contact/>
    </>
    </main>
  );
}
