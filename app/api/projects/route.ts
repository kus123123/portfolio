import { portfolioData } from "@/lib/portfolio-data";

export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    projects: portfolioData.projects,
  });
}
