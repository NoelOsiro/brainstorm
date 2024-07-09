import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-03.jpeg";
import image3 from "@/public/images/user/user-04.jpeg";
import image4 from "@/public/images/user/user-05.jpeg";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Martin Wambua",
    designation: "Teacher, Brainstorm Junior Children's Centre, Kibera-Kenya",
    image: image1,
    content:
      "As a teacher at Brainstorm Junior Children's Centre, I have witnessed firsthand the positive impact of our work on the children's lives. The joy and curiosity they bring to learning inspire me every day. We strive to provide them with the best education and support despite the challenges we face.",
  },
  {
    id: 2,
    name: "James Mwangi",
    designation: "Cook, Brainstorm Junior Children's Centre, Kibera-Kenya",
    image: image2,
    content:
      "Working as a cook at Brainstorm Junior Children's Centre has been a rewarding experience. Ensuring that the children receive nutritious meals is a responsibility I take seriously. It's heartwarming to see their smiles and know that our efforts are making a difference in their health and happiness.",
  },
  {
    id: 3,
    name: "Lucy Njeri",
    designation: "Businesswoman, Kibera-Kenya",
    image: image3,
    content:
      "As a local businesswoman, I have seen the positive changes brought about by the Brainstorm Junior Children's Centre. The support and education provided to the children have a ripple effect on the community, improving lives and fostering growth.",
  },
  {
    id: 4,
    name: "Samuel Otieno",
    designation: "Widower, Kibera-Kenya",
    image: image4,
    content:
      "After losing my wife, Brainstorm Junior Children's Centre has been a beacon of hope for me and my children. The care and support they provide have helped us navigate through tough times and look forward to a brighter future.",
  },
];
