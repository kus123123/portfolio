"use client";

import { useRef, useState, type ComponentPropsWithoutRef } from "react";

/** Wraps highlighted <pre> output with a language label and a copy button. */
export function CodeBlock(props: ComponentPropsWithoutRef<"pre"> & { "data-language"?: string }) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const language = props["data-language"];

  async function copy() {
    const text = preRef.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text.replace(/\n$/, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="code-block">
      <div className="code-block-bar">
        <span>{language && language !== "plaintext" ? language : "text"}</span>
        <button type="button" onClick={copy} aria-label={copied ? "Code copied" : "Copy code"}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre ref={preRef} tabIndex={0} role="region" aria-label="Code example" {...props} />
    </div>
  );
}
