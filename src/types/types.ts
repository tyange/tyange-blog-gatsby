export interface Reading {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    category: string;
  };
  slug: string;
}
