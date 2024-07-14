import SectionHeader from "@/components/Common/SectionHeader";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate Page - Brainstorm Children's Centre",
  description: "This is Donate page for Brainstorm Junior Children Centre",
  openGraph: {
    title: "Donate Page - Brainstorm Children's Centre",
    description: "This is Donate page for Brainstorm Junior Children Centre",
    url: "https://brainstormcentre.co.ke/donate",
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
};

const DonatePage = async () => {
  return (
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
  );
};

export default DonatePage;
