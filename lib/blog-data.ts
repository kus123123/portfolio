export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  lead: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "a-place-for-the-decisions-behind-the-build",
    title: "A place for the decisions behind the build",
    description:
      "Why this blog will explore backend trade-offs, product experiments, and AI workflows beyond the finished screenshots.",
    category: "From the notebook",
    publishedAt: "2026-10-12",
    readMinutes: 2,
    lead: "A project page can show the result. A build note can explain the decisions that made it useful.",
    sections: [
      {
        heading: "What goes under the hood",
        paragraphs: [
          "I’m interested in the point where a product idea meets a dependable system. An API contract, a database index, or a cache boundary is invisible in a screenshot, but it shapes whether the experience holds up.",
          "This is where I’ll write about those choices: the constraints, the trade-offs, and the details that are worth carrying into the next build.",
        ],
      },
      {
        heading: "Products, not just endpoints",
        paragraphs: [
          "The work on this site moves between browser extensions, contact-sharing flows, file-aware conversations, and automation. Each has a user workflow at one end and a chain of services at the other.",
          "I want to document both sides. A clear interaction deserves a clear system behind it, and a well-designed backend should make the product easier to use, not just easier to deploy.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Expect practical notes on API design, performance, security, AI retrieval, and shipping small products. Some posts will unpack projects already in the portfolio; others will examine patterns that apply across them.",
          "The aim is to make each note useful on its own. The first deeper project write-ups will follow as I turn build notes into articles worth reading.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
