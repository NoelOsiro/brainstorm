import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Pupils assembling at the Assembly Point",
    designation: "Brainstorm Junior Children's Centre, Kibera-Kenya",
    image: image1,
    content:
      "Pupils assembling at the Assembly Point with some teachers. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Children having hot lunch",
    designation: "Brainstorm Junior Children's Centre, Kibera-Kenya",
    image: image2,
    content:
      "Children having their hot lunch on desks due to lack of a dining hall. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi.",
  },
  {
    id: 3,
    name: "Boys playing football on the playground",
    designation: "Brainstorm Junior Children's Centre, Kibera-Kenya",
    image: image1,
    content:
      "Boys playing football on the playground during games. Convallis fringilla ante nibh non urna.",
  },
  {
    id: 4,
    name: "Young children in baby care",
    designation: "Brainstorm Junior Children's Centre, Kibera-Kenya",
    image: image2,
    content:
      "Young children in baby care sitting on the floor due to lack of facilities. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
