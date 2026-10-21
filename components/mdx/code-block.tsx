"use client";

import { useRef, useState, type ComponentPropsWithoutRef } from "react";

/** Wraps highlighted <pre> output with a language label and a copy button. */
export function CodeBlock(props: ComponentPropsWithoutRef<"pre"> & { "data-language"?: string }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [status, setStatus] = useState("");
  const language = props["data-language"];

  async function copy() {
    const text = preRef.current?.innerText ?? "";
    setStatus("Copying…");
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ""));
      setStatus("Code copied.");
    } catch {
      setStatus("Copy failed. Select and copy the code manually.");
    }
  }

  return (
    <div className="code-block">
      <div className="code-block-bar">
        <span>{language && language !== "plaintext" ? language : "text"}</span>
        <button type="button" onClick={copy} disabled={status === "Copying…"} aria-label="Copy code">
          Copy
        </button>
      </div>
      <div className="code-copy-status" role="status" aria-atomic="true">{status}</div>
      <pre ref={preRef} tabIndex={0} role="region" aria-label="Code example" {...props} />
    </div>
  );
}
