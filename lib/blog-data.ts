type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "code"; filename: string; code: string }
  | { type: "link"; label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readMinutes: number;
  lead: string;
  tags: string[];
  sections: { heading: string; blocks: BlogBlock[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "nodejs-process-available-memory",
    title: "Checking Memory Before Heavy Work in Node.js",
    description:
      "Use process.availableMemory() as a signal for choosing smaller batches in backend jobs.",
    category: "Backend development",
    publishedAt: "2026-10-12",
    readMinutes: 3,
    lead: "A backend job can work well with a small CSV and struggle when the input grows. Loading more rows, creating objects, and processing several tasks together all require memory. One useful signal when deciding how much work to start is `process.availableMemory()`.",
    tags: ["Node.js", "JavaScript", "Backend Development"],
    sections: [
      {
        heading: "What does it do?",
        blocks: [
          { type: "paragraph", text: "This built-in function reports free memory still available to the process, in bytes. It was added in Node.js 20.13.0 and 22.0.0, and became stable in Node.js 22.16.0 and 24.0.0." },
          { type: "paragraph", text: "Think of RAM as a desk where you work on documents. A crowded desk gives you a reason to handle fewer documents at once. Disk storage is the filing cabinet; checking RAM and checking disk space answer different questions." },
        ],
      },
      {
        heading: "A small example",
        blocks: [
          { type: "paragraph", text: "Save this as `memory-check.mjs` and run `node memory-check.mjs`:" },
          {
            type: "code",
            filename: "memory-check.mjs",
            code: "import { availableMemory } from 'node:process';\n\nconst MiB = 1024 * 1024;\nconst freeBytes = availableMemory();\n\n// Illustrative threshold; tune it for your workload.\nconst batchSize = freeBytes < 256 * MiB ? 100 : 500;\n\nconsole.log(`Available memory: ${Math.floor(freeBytes / MiB)} MiB`);\nconsole.log(`Suggested batch size: ${batchSize}`);",
          },
          { type: "paragraph", text: "The script takes a snapshot of available memory and chooses a batch size. It does not allocate a batch or process a CSV itself." },
        ],
      },
      {
        heading: "Where can I use it?",
        blocks: [
          { type: "paragraph", text: "Imagine a CSV import worker that validates rows and writes them to PostgreSQL. Before reading the next batch, it could use this signal to choose fewer rows when memory is tight." },
          { type: "paragraph", text: "The same idea can inform image-processing concurrency or how many background jobs a worker starts together. These are design examples, rather than guarantees that a particular threshold is appropriate." },
          { type: "paragraph", text: "For a CSV importer, combine the signal with streaming input and a fixed maximum batch size. Measure the actual cost of your rows: a hundred short records can use very different amounts of memory from a hundred records containing large text fields." },
        ],
      },
      {
        heading: "The common pitfall",
        blocks: [
          { type: "paragraph", text: "Available memory is a changing snapshot. Another task can consume memory after the check, and V8's JavaScript heap limit can still restrict allocations. The result is not a promise that your next operation will succeed." },
          { type: "paragraph", text: "Use it to guide workload decisions, while keeping streaming, bounded concurrency, monitoring, and failure handling in place." },
          { type: "link", label: "Official Node.js documentation: process.availableMemory()", href: "https://nodejs.org/api/process.html#processavailablememory" },
          { type: "paragraph", text: "Documentation checked on October 12, 2026." },
        ],
      },
    ],
  },
  {
    slug: "a-place-for-the-decisions-behind-the-build",
    title: "A place for the decisions behind the build",
    description:
      "Why this blog will explore backend trade-offs, product experiments, and AI workflows beyond the finished screenshots.",
    category: "From the notebook",
    publishedAt: "2026-10-12",
    readMinutes: 2,
    lead: "A project page can show the result. A build note can explain the decisions that made it useful.",
    tags: ["Product engineering"],
    sections: [
      {
        heading: "What goes under the hood",
        blocks: [
          { type: "paragraph", text: "I’m interested in the point where a product idea meets a dependable system. An API contract, a database index, or a cache boundary is invisible in a screenshot, but it shapes whether the experience holds up." },
          { type: "paragraph", text: "This is where I’ll write about those choices: the constraints, the trade-offs, and the details that are worth carrying into the next build." },
        ],
      },
      {
        heading: "Products, not just endpoints",
        blocks: [
          { type: "paragraph", text: "The work on this site moves between browser extensions, contact-sharing flows, file-aware conversations, and automation. Each has a user workflow at one end and a chain of services at the other." },
          { type: "paragraph", text: "I want to document both sides. A clear interaction deserves a clear system behind it, and a well-designed backend should make the product easier to use, not just easier to deploy." },
        ],
      },
      {
        heading: "What to expect",
        blocks: [
          { type: "paragraph", text: "Expect practical notes on API design, performance, security, AI retrieval, and shipping small products. Some posts will unpack projects already in the portfolio; others will examine patterns that apply across them." },
          { type: "paragraph", text: "The aim is to make each note useful on its own. The first deeper project write-ups will follow as I turn build notes into articles worth reading." },
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
