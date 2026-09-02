'use client';

import React, { useState } from 'react';

export interface NoteContentRendererProps {
  content: string;
}

interface CodeBlockProps {
  language: string;
  code: string;
}

function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="note-code-wrapper">
      <div className="note-code-header">
        <span className="note-code-lang font-mono text-xs">{language || 'text'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="note-code-copy-btn font-mono text-xs"
          aria-label="Copy code block to clipboard"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="note-code-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function NoteContentRenderer({ content }: NoteContentRendererProps) {
  // Parse markdown-style headers, paragraphs, and code blocks
  const renderContent = () => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];

    let inCodeBlock = false;
    let codeLanguage = '';
    let codeBuffer: string[] = [];
    let paragraphBuffer: string[] = [];

    const flushParagraph = (key: string) => {
      if (paragraphBuffer.length > 0) {
        const text = paragraphBuffer.join('\n').trim();
        if (text) {
          elements.push(
            <p key={key} className="note-prose-p text-body">
              {formatInlineStyles(text)}
            </p>
          );
        }
        paragraphBuffer = [];
      }
    };

    lines.forEach((line, index) => {
      // Check code block fences
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          flushParagraph(`p-${index}`);
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
          codeBuffer = [];
        } else {
          elements.push(
            <CodeBlock
              key={`code-${index}`}
              language={codeLanguage}
              code={codeBuffer.join('\n')}
            />
          );
          inCodeBlock = false;
          codeLanguage = '';
          codeBuffer = [];
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      // Headings
      if (line.startsWith('### ')) {
        flushParagraph(`p-before-${index}`);
        const headingText = line.slice(4).trim();
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        elements.push(
          <h3 key={`h3-${index}`} id={headingId} className="note-prose-h3 font-sans">
            <a href={`#${headingId}`} className="note-heading-anchor" aria-hidden="true">#</a>
            <span>{headingText}</span>
          </h3>
        );
        return;
      }

      if (line.startsWith('#### ')) {
        flushParagraph(`p-before-${index}`);
        const headingText = line.slice(5).trim();
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        elements.push(
          <h4 key={`h4-${index}`} id={headingId} className="note-prose-h4 font-sans">
            <a href={`#${headingId}`} className="note-heading-anchor" aria-hidden="true">#</a>
            <span>{headingText}</span>
          </h4>
        );
        return;
      }

      // Ordered and Unordered lists
      if (line.match(/^(\d+\.|\-|\*)\s+/)) {
        flushParagraph(`p-before-list-${index}`);
        const itemText = line.replace(/^(\d+\.|\-|\*)\s+/, '').trim();
        elements.push(
          <li key={`li-${index}`} className="note-prose-li text-body">
            {formatInlineStyles(itemText)}
          </li>
        );
        return;
      }

      // Empty line -> flush paragraph
      if (line.trim() === '') {
        flushParagraph(`p-blank-${index}`);
        return;
      }

      paragraphBuffer.push(line);
    });

    flushParagraph('p-final');
    return elements;
  };

  return (
    <article className="note-article-prose" aria-label="Field Note Content">
      {renderContent()}
    </article>
  );
}

function formatInlineStyles(text: string): React.ReactNode[] {
  // Simple regex parser for `code`, **bold**, and plain text
  const parts: React.ReactNode[] = [];
  const regex = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={match.index} className="note-inline-code font-mono text-xs">
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="note-inline-bold">
          {token.slice(2, -2)}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}
