"use client";

import React from "react";
import { Highlight, themes, Language } from "prism-react-renderer";

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  filename?: string;
}

interface MDXCodeBlockProps {
  children: string;
  className?: string;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = true,
  filename,
}: CodeBlockProps) {
  // Always use dark themes for code blocks
  const theme = themes.vsDark;

  // Convert language string to a valid Language type or fallback to 'tsx'
  const lang = (language as Language) || "tsx";

  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-700 shadow-md w-full">
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2 border-b border-slate-700">
        <span className="text-xs font-medium text-slate-300">
          {filename || language}
        </span>
        <div className="flex space-x-1">
          <div className="h-3 w-3 rounded-full bg-red-500 opacity-80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500 opacity-80" />
          <div className="h-3 w-3 rounded-full bg-green-500 opacity-80" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <Highlight theme={theme} code={code} language={lang}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} p-4 text-sm bg-[#1e1e1e] w-full`}
              style={{ ...style, backgroundColor: "#1e1e1e" }}
            >
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <div
                    key={i}
                    className={`${
                      lineProps.className || ""
                    } leading-relaxed whitespace-pre`}
                    style={lineProps.style}
                  >
                    {showLineNumbers && (
                      <span className="inline-block w-8 text-right mr-4 text-gray-500 select-none">
                        {i + 1}
                      </span>
                    )}
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token, key });
                      return (
                        <span
                          key={key}
                          className={tokenProps.className}
                          style={tokenProps.style}
                        >
                          {tokenProps.children}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}

// Simple version for MDX
export function MDXCodeBlock({ children, className }: MDXCodeBlockProps) {
  const language = className ? className.replace("language-", "") : "tsx";

  return (
    <div className="not-prose my-6 w-full">
      <CodeBlock code={children || ""} language={language} />
    </div>
  );
}
