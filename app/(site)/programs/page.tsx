import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import ProgramData from "@/components/Program/programData";
import ProgramItem from "@/components/Program/ProgramItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const ProgramPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section id='programs' className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1315 px-4 md:px-8 xl:mt-20 xl:px-0">
            {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "OUR PROGRAMS",
              subtitle: "Core Programs of Our Centre",
              description: `Discover the key initiatives and programs that are making a
              difference in the lives of children in Kibera. Learn how we provide
              education, nutrition, and support to empower the next generation.`,
            }}
          />
          {/* <!-- Section Title End --> */}
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Team item Start --> */}
            {ProgramData.map((post, key) => (
              <ProgramItem key={key} program={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default ProgramPage;
