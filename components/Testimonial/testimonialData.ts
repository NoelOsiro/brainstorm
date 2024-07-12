import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-03.jpeg";
import image3 from "@/public/images/user/user-04.jpeg";
import image4 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Ephline  Atieno",
    designation: "Business woman, Kibera-Kenya",
    image: image1,
    content:
      `Brainstorm Centre has been a blessing to our community. The business management education and support they provide to the women are invaluable. I have seen firsthand the positive impact they have on the lives of the children and their families. I am grateful for the work they do and the difference they make in our community.`
  },
  {
    id: 2,
    name: "Symprose  Okecha",
    designation: "Proud home owner, Kibera-Kenya",
    image: image4,
    content:
      "I am grateful for the support and education provided by Brainstorm Centre. The widow support group has helped my business and  now I managed to build  my house. I am thankful for the work they do and the difference they make in our community.",
  },
  {
    id: 3,
    name: "Pamela Nabwire",
    designation: "Chairlady Widows  Group, Kibera-Kenya",
    image: image2,
    content:
      "As a local businesswoman, I have seen the positive changes brought about by the Brainstorm Junior Children's Centre. The support and education provided to the children have a ripple effect on the community, improving lives and fostering growth. ",
  },
  {
    id: 4,
    name: "Siprina Awiti",
    designation: "Widower, Kibera-Kenya",
    image: image3,
    content:
      `I trained on business management, financial litracy etc. At the moment I am running my business that I started in 2019. I feel empowered and I am able to support my family. `
  },
];
