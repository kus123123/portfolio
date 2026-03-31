import { portfolioData } from "@/lib/portfolio-data";

export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    person: portfolioData.person,
    navigation: portfolioData.navigation,
    impactMetrics: portfolioData.impactMetrics,
    capabilities: portfolioData.capabilities,
    experience: portfolioData.experience,
    skillGroups: portfolioData.skillGroups,
    education: portfolioData.education,
  });
}
