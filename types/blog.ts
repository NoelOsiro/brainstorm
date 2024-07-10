export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string[];
  mainImage?: any;
  author?: Author;
  tags?: string[];
  category: string;
  publishedAt?: string;
  additionalImages: { src: string; width: number; height: number; alt: string }[];
};
