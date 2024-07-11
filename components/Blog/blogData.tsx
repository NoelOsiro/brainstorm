import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    title: "Expanding Education: New Initiatives at Brainstorm Junior",
    slug: "expanding-education-new-initiatives",
    metadata: "Learn about the latest educational programs and initiatives at Brainstorm Junior Children Centre.",
    mainImage: "/images/blog/blog-01.jpeg",
    author: { name: "George  Jarona ", image: "/images/authors/gerald.jpg" },
    tags: ["Education", "Initiatives"],
    category: "Education",
    publishedAt: "July 5, 2023",
    body: [
      "Brainstorm Junior is constantly evolving to provide the best education to its students. Our latest initiatives aim to expand educational opportunities and improve the learning experience.",
      "One of our new programs focuses on integrating technology into the classroom. We have introduced tablets and smartboards to enhance interactive learning. Students are now able to access a wide range of educational resources and engage in interactive lessons.",
      "In addition to technological advancements, we have launched new extracurricular activities that complement our academic curriculum. From arts and crafts to sports, these activities are designed to nurture the holistic development of our students."
    ],
    additionalImages: [
      { src: "/images/blog/blog-01.jpeg", width: 350, height: 200, alt: "Classroom" },
      { src: "/images/blog/blog-02.jpeg", width: 350, height: 200, alt: "Students" }
    ]
  },
  {
    _id: 2,
    title: "Empowering Change: Symprose Okecha's Journey",
    slug: "empowering-change-symprose-okecha",
    metadata: "An inspiring story of Symprose Okecha, a widow whose life was transformed through the support of Brainstorm Center.",
    mainImage: "/images/blog/blog-03.jpeg",
    author: { name: "George  Jarona ", image: "/images/authors/gerald.jpg" },
    tags: ["Empowerment", "Change", "Journey"],
    category: "Success Stories",
    publishedAt: "June 20, 2023",
    body: [
      "Meet Symprose Okecha, one of the remarkable women who joined our community with nothing but hope and determination. As a widow, Symprose faced numerous challenges and had limited means to support herself and her family. Despite these obstacles, she was driven by a desire to create a better future.",
      "With the unwavering support of Brainstorm Center, Symprose embarked on a transformative journey. She began a small business, starting with the basics and gradually expanding her efforts. The community rallied around her, offering mentorship, resources, and encouragement every step of the way.",
      "Over time, Symprose's hard work and perseverance paid off. Her business began to thrive, providing her with a steady income and a renewed sense of purpose. The true testament to her success came when we were able to help her build a new home. This house not only represents a physical shelter but also the restoration of her dignity and the rekindling of her dreams.",
      "Today, Symprose stands as a beacon of hope and inspiration for others in our community. Her journey from hardship to triumph illustrates the power of resilience and the impact of collective support. With her newfound stability, she can now smile bigger and embrace the future with confidence.",
      "Symprose Okecha's story is a testament to the incredible change that can happen when individuals are given the tools and opportunities to succeed. At Brainstorm Junior, we are proud to be a part of her journey and to witness the positive ripple effects of her success within our community."
    ],
    additionalImages: [
      { src: "/images/blog/blog-022.jpg", width: 350, height: 200, alt: "Student Success" },
      { src: "/images/blog/blog-03.jpeg", width: 350, height: 200, alt: "Achievement" }
    ]
  },

  {
    _id: 3,
    title: "Community Engagement: Brainstorm Junior's Outreach Programs",
    slug: "community-engagement-outreach-programs",
    metadata: "Read about the outreach programs conducted by Brainstorm Junior and their impact on the local community.",
    mainImage: "/images/blog/blog-07.jpg",
    author: { name: "George Jarona", image: "/images/authors/gerald.jpg" },
    tags: ["Community", "Outreach"],
    category: "Community",
    publishedAt: "May 15, 2023",
    body: [
      "At Brainstorm Junior, we believe in giving back to the community. Our outreach programs are designed to support and uplift the local community through various initiatives.",
      "One of our key programs is the food distribution initiative, where we provide essential food supplies to families in need. This program has helped alleviate hunger and provided much-needed relief to many households.",
      "In addition to food distribution, we conduct educational workshops and health camps. These workshops cover topics such as hygiene, nutrition, and basic healthcare, empowering community members with knowledge and resources to improve their well-being.",
      "Our outreach efforts have made a significant impact, fostering a sense of community and support among the residents. Through collaboration and collective efforts, we strive to create a positive and lasting change in the lives of those we serve."
    ],
    additionalImages: [
      { src: "/images/blog/blog-07.jpg", width: 350, height: 200, alt: "Outreach" },
      { src: "/images/blog/blog-11.jpg", width: 350, height: 200, alt: "Community Support" }
    ]
  },
  {
    _id: 4,
    title: "Nurturing Talent: Extracurricular Activities at Brainstorm Junior",
    slug: "nurturing-talent-extracurricular-activities",
    metadata: "Explore the various extracurricular activities offered at Brainstorm Junior and how they contribute to holistic development.",
    mainImage: "/images/blog/blog-05.jpg",
    author: { name: "George Jarona", image: "/images/authors/gerald.jpg" },
    tags: ["Talent", "Extracurricular"],
    category: "Activities",
    publishedAt: "April 10, 2023",
    body: [
      "At Brainstorm Junior, we understand the importance of nurturing talent beyond academics. Our extracurricular activities are designed to foster creativity, teamwork, and personal growth.",
      "We offer a wide range of activities, including music, dance, drama, and sports. These activities provide students with opportunities to explore their interests and develop new skills.",
      "One of our popular programs is the talent showcase, where students get to display their talents and receive recognition for their hard work. This event is a celebration of creativity and achievement, bringing the community together to support our young talents.",
      "Our dedicated staff and volunteers work tirelessly to ensure that every student has the opportunity to participate and thrive in these activities. By nurturing their talents, we aim to build their confidence and prepare them for future success."
    ],
    additionalImages: [
      { src: "/images/blog/blog-05.jpg", width: 350, height: 200, alt: "Extracurricular Activities" },
      { src: "/images/blog/blog-06.jpg", width: 350, height: 200, alt: "Talent Showcase" }
    ]
  },
  {
    _id: 5,
    title: "Empowering Young Minds in Kibera",
    slug: "empowering-young-minds-in-kibera",
    metadata: "Discover how Brainstorm Junior is making a difference in the lives of children in Kibera.",
    mainImage: "/images/blog/blog-02.jpeg",
    author: { name: "George Jarona", image: "/images/authors/gerald.jpg" },
    tags: ["Empowerment", "Kibera"],
    category: "Empowerment",
    publishedAt: "March 25, 2023",
    body: [
      "Brainstorm Junior is dedicated to empowering young minds in Kibera, one of the largest informal settlements in Nairobi. Our programs are designed to provide educational opportunities and support to children who face significant challenges.",
      "Through our scholarship program, we offer financial assistance to students who demonstrate academic potential and a commitment to learning. This program has enabled many children to access quality education and pursue their dreams.",
      "In addition to scholarships, we run after-school programs that provide a safe and supportive environment for students to study and engage in extracurricular activities. These programs are staffed by dedicated volunteers who serve as mentors and role models.",
      "Our efforts have resulted in improved academic performance, increased school attendance, and a greater sense of hope and motivation among the students. We are committed to making a lasting impact in the lives of these children and helping them achieve their full potential."
    ],
    additionalImages: [
      { src: "/images/blog/blog-02.jpeg", width: 350, height: 200, alt: "Empowerment" },
      { src: "/images/blog/blog-10.jpg", width: 350, height: 200, alt: "Support" }
    ]
  },
  {
    _id: 6,
    title: "Supporting Education in Kibera: How You Can Help",
    slug: "supporting-education-in-kibera",
    metadata: "Find out how you can contribute to the educational efforts at Brainstorm Junior Children Centre.",
    mainImage: "/images/blog/blog-06.jpg",
    author: { name: "George  Jarona ", image: "/images/authors/gerald.jpg" },
    tags: ["Support", "Education"],
    category: "Support",
    publishedAt: "February 10, 2023",
    body: [
      "Brainstorm Junior relies on the generosity of individuals and organizations to support our educational initiatives in Kibera. There are several ways you can get involved and make a difference.",
      "One of the most impactful ways to help is by sponsoring a child. Your sponsorship can cover school fees, uniforms, books, and other essentials, ensuring that a child can attend school and receive a quality education.",
      "We also welcome donations of educational materials, such as books, computers, and stationery. These resources are vital for creating a conducive learning environment and enhancing the educational experience of our students.",
      "Volunteering your time and skills is another great way to contribute. Whether you can teach a class, mentor a student, or assist with administrative tasks, your involvement can have a profound impact on our community.",
      "Lastly, spreading the word about Brainstorm Junior and our mission helps us reach more people who can support our cause. Follow us on social media, share our stories, and encourage others to get involved."
    ],
    additionalImages: [
      { src: "/images/blog/blog-08.jpg", width: 350, height: 200, alt: "Support Education" },
      { src: "/images/blog/blog-09.jpg", width: 350, height: 200, alt: "Help" },
    ],
  },
];

export default BlogData;
