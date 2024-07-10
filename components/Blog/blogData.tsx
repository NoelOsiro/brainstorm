import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    title: "Expanding Education: New Initiatives at Brainstorm Junior",
    slug: "expanding-education-new-initiatives",
    metadata: "Learn about the latest educational programs and initiatives at Brainstorm Junior Children Centre.",
    mainImage: "/images/blog/blog-01.jpeg",
    author: { name: "Jane Doe", image: "/images/authors/jane-doe.jpg" },
    tags: ["Education", "Initiatives"],
    category: "Education",
    publishedAt: "July 5, 2023",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Pellentesque eget mauris eget mauris egestas dignissim.",
      "Vestibulum vitae urna sit amet purus sodales faucibus.",
    ],
    additionalImages: [
      { src: "/images/blog/blog-01.jpeg", width: 350, height: 200, alt: "Classroom" },
      { src: "/images/blog/blog-02.jpeg", width: 350, height: 200, alt: "Students" },
    ],
  },
  {
    _id: 2,
    title: "Success Stories: Students of Brainstorm Junior",
    slug: "success-stories-students",
    metadata: "Inspiring stories of students who have thrived with the support of Brainstorm Junior.",
    mainImage: "/images/blog/blog-03.jpeg",
    author: { name: "John Smith", image: "/images/authors/john-smith.jpg" },
    tags: ["Success", "Students"],
    category: "Success Stories",
    publishedAt: "June 20, 2023",
    body: [
      "Vestibulum finibus auctor efficitur.",
      "Suspendisse sed lacus malesuada, sollicitudin nisl vel, luctus turpis.",
    ],
    additionalImages: [
      { src: "/images/blog/blog-03.jpeg", width: 350, height: 200, alt: "Student Success" },
      { src: "/images/blog/blog-04.jpeg", width: 350, height: 200, alt: "Achievement" },
    ],
  },
  {
    _id: 3,
    title: "Community Engagement: Brainstorm Junior's Outreach Programs",
    slug: "community-engagement-outreach-programs",
    metadata: "Read about the outreach programs conducted by Brainstorm Junior and their impact on the local community.",
    mainImage: "/images/blog/blog-07.jpg",
    author: { name: "Alice Johnson", image: "/images/authors/alice-johnson.jpg" },
    tags: ["Community", "Outreach"],
    category: "Community",
    publishedAt: "May 15, 2023",
    body: [
      "Phasellus id convallis turpis, vitae tincidunt nisi.",
      "Vivamus a nibh efficitur, euismod odio et, rutrum nunc.",
    ],
    additionalImages: [
      { src: "/images/blog/blog-07.jpg", width: 350, height: 200, alt: "Outreach" },
      { src: "/images/blog/blog-08.jpg", width: 350, height: 200, alt: "Community Support" },
    ],
  },
  {
    _id: 4,
    title: "Nurturing Talent: Extracurricular Activities at Brainstorm Junior",
    slug: "nurturing-talent-extracurricular-activities",
    metadata: "Explore the various extracurricular activities offered at Brainstorm Junior and how they contribute to holistic development.",
    mainImage: "/images/blog/blog-05.jpg",
    author: { name: "Michael Brown", image: "/images/authors/michael-brown.jpg" },
    tags: ["Talent", "Extracurricular"],
    category: "Activities",
    publishedAt: "April 10, 2023",
    body: [
      "Maecenas non bibendum dui. Etiam vitae libero vitae arcu fermentum euismod.",
      "Donec ultricies, tellus eu pretium fermentum, nulla eros suscipit lectus, sed tempus justo lectus sit amet ante.",
    ],
    additionalImages: [
      { src: "/images/blog/blog-05.jpg", width: 350, height: 200, alt: "Extracurricular Activities" },
      { src: "/images/blog/blog-06.jpg", width: 350, height: 200, alt: "Talent Showcase" },
    ],
  },
  {
    _id: 5,
    title: "Empowering Young Minds in Kibera",
    slug: "empowering-young-minds-in-kibera",
    metadata: "Discover how Brainstorm Junior is making a difference in the lives of children in Kibera.",
    mainImage: "/images/blog/blog-02.jpeg",
    author: { name: "Emily Davis", image: "/images/authors/emily-davis.jpg" },
    tags: ["Empowerment", "Kibera"],
    category: "Empowerment",
    publishedAt: "March 25, 2023",
    body: [
      "Sed non justo vel leo eleifend elementum quis eu mauris.",
      "Cras scelerisque, arcu eu fringilla eleifend, ipsum lectus cursus leo, at posuere leo ex sit amet felis.",
    ],
    additionalImages: [
      { src: "/images/blog/blog-02.jpeg", width: 350, height: 200, alt: "Empowerment" },
      { src: "/images/blog/blog-03.jpeg", width: 350, height: 200, alt: "Support" },
    ],
  },
  {
    _id: 6,
    title: "Supporting Education in Kibera: How You Can Help",
    slug: "supporting-education-in-kibera",
    metadata: "Find out how you can contribute to the educational efforts at Brainstorm Junior Children Centre.",
    mainImage: "/images/blog/blog-06.jpg",
    author: { name: "Sarah Wilson", image: "/images/authors/sarah-wilson.jpg" },
    tags: ["Support", "Education"],
    category: "Support",
    publishedAt: "February 10, 2023",
    body: [
      "Donec lobortis arcu eget pretium eleifend.",
      "Vivamus laoreet augue in dui blandit, eget iaculis odio blandit.",
    ],
    additionalImages: [
      { src: "/images/blog/blog-06.jpg", width: 350, height: 200, alt: "Support Education" },
      { src: "/images/blog/blog-07.jpg", width: 350, height: 200, alt: "Help" },
    ],
  },
];

export default BlogData;
