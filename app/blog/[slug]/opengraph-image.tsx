import { ImageResponse } from "next/og";
import { formatBlogDate, getAllPosts, getPost } from "@/lib/blog";

export const alt = "Blog post by Kushagra Rohatgi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export default async function PostOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  const title = post?.title ?? "Notes from the build";
  const fontSize = title.length > 60 ? 58 : title.length > 38 ? 68 : 80;

  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", width: "100%", height: "100%", overflow: "hidden", padding: "62px 70px", background: "#f6f5f0", color: "#111315", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", position: "absolute", right: -120, top: -150, width: 460, height: 460, borderRadius: 230, background: "#f8edac" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 12, background: "#2452e9", color: "#fff", fontSize: 24, fontWeight: 700 }}>kr.</div>
        <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: 3 }}>NOTES FROM THE BUILD</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
        <div style={{ display: "flex", color: "#2452e9", fontSize: 24, fontWeight: 700, letterSpacing: 2 }}>{(post?.category ?? "Blog").toUpperCase()}</div>
        <div style={{ display: "flex", fontSize, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05 }}>{title}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid #c5c9c1", paddingTop: 25, fontSize: 19, fontWeight: 700, letterSpacing: 1 }}>
        <span>KUSHAGRA ROHATGI</span>
        <span>{post ? `${formatBlogDate(post.date).toUpperCase()} / ${post.readMinutes} MIN READ` : ""}</span>
      </div>
    </div>,
    size,
  );
}
