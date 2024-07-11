import SectionHeader from "@/components/Common/SectionHeader";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
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
