"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import styles from "./MarkdownMessage.module.css";
// ===== TYPES =====
interface MarkdownMessageProps {
  content: string;
}
export default function MarkdownMessage({ content }: MarkdownMessageProps) {
  // ===== COMPONENTS MAP =====
  const components: Components = {
    h1: ({ children }) => <h1 className={styles.h1}>{children}</h1>,
    h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
    p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    ul: ({ children }) => <ul className={styles.ul}>{children}</ul>,
    ol: ({ children }) => <ol className={styles.ol}>{children}</ol>,
    li: ({ children }) => <li className={styles.li}>{children}</li>,
    code: ({ inline, children, ...props }: any) => {
      return inline ? (
        <code className={styles.inlineCode} {...props}>
          {children}
        </code>
      ) : (
        <code className={styles.codeBlock} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => <pre className={styles.pre}>{children}</pre>,
    a: ({ href, children }) => (
      <a
        href={href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className={styles.strong}>{children}</strong>
    ),
    em: ({ children }) => <em className={styles.em}>{children}</em>,
    blockquote: ({ children }) => (
      <blockquote className={styles.blockquote}>{children}</blockquote>
    ),
    table: ({ children }) => <table className={styles.table}>{children}</table>,
    thead: ({ children }) => <thead className={styles.thead}>{children}</thead>,
    tbody: ({ children }) => <tbody className={styles.tbody}>{children}</tbody>,
    tr: ({ children }) => <tr className={styles.tr}>{children}</tr>,
    th: ({ children }) => <th className={styles.th}>{children}</th>,
    td: ({ children }) => <td className={styles.td}>{children}</td>,
    hr: () => <hr className={styles.hr} />,
  };
  // ===== RENDER =====
  return (
    <div className={styles.markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
