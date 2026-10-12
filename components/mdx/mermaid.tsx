"use client";

import { useEffect, useId, useState } from "react";

/**
 * Renders a Mermaid diagram in the browser. The library is loaded only on
 * posts that contain a diagram, and the source stays visible as a fallback.
 */
export function Mermaid({ chart, caption }: { chart: string; caption?: string }) {
  const id = `mermaid-${useId().replace(/[^a-zA-Z0-9-]/g, "")}`;
  const [svg, setSvg] = useState<string>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    import("mermaid")
      .then(async ({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: "base",
          fontFamily: "Manrope, Avenir Next, sans-serif",
          themeVariables: {
            primaryColor: "#e0e7f6",
            primaryBorderColor: "#2452e9",
            primaryTextColor: "#111315",
            lineColor: "#52544f",
            secondaryColor: "#dcebe1",
            tertiaryColor: "#f8edac",
            background: "#f9f8f3",
          },
        });
        const { svg } = await mermaid.render(id, chart.trim());
        if (active) setSvg(svg);
      })
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, [chart, id]);

  return (
    <figure className="mdx-figure mdx-diagram">
      {svg ? (
        <div className="mdx-diagram-svg" role="img" aria-label={caption ?? "Diagram"} dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <pre className="mdx-diagram-fallback" aria-busy={!failed}>{failed ? `Diagram could not be rendered:\n\n${chart}` : chart}</pre>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
