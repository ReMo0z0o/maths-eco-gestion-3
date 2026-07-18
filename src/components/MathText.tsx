import { useMemo } from "react";
import katex from "katex";

/**
 * Rendu du mini-format MathText :
 *   `$...$` math en ligne · `$$...$$` math display · `**gras**`
 *   `- ` liste à puces · ligne vide = paragraphe
 */

type Segment = { type: "text" | "bold" | "math"; value: string };

type Block =
  | { type: "p"; segments: Segment[] }
  | { type: "math"; latex: string }
  | { type: "list"; items: Segment[][] };

function parseInline(text: string): Segment[] {
  const segments: Segment[] = [];
  const re = /(\$[^$]+\$|\*\*[^*]+?\*\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) segments.push({ type: "text", value: text.slice(last, m.index) });
    const tok = m[0];
    if (tok.startsWith("$")) segments.push({ type: "math", value: tok.slice(1, -1) });
    else segments.push({ type: "bold", value: tok.slice(2, -2) });
    last = m.index + tok.length;
  }
  if (last < text.length) segments.push({ type: "text", value: text.slice(last) });
  return segments;
}

function parseBlocks(content: string): Block[] {
  const blocks: Block[] = [];
  // Sépare d'abord les blocs $$...$$ du reste
  const chunks = content.split(/\$\$([\s\S]+?)\$\$/g);
  chunks.forEach((chunk, i) => {
    if (i % 2 === 1) {
      blocks.push({ type: "math", latex: chunk.trim() });
      return;
    }
    for (const para of chunk.split(/\n\s*\n/)) {
      const lines = para
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);
      if (lines.length === 0) continue;
      let listItems: Segment[][] = [];
      let textLines: string[] = [];
      const flushText = () => {
        if (textLines.length) {
          blocks.push({ type: "p", segments: parseInline(textLines.join(" ")) });
          textLines = [];
        }
      };
      const flushList = () => {
        if (listItems.length) {
          blocks.push({ type: "list", items: listItems });
          listItems = [];
        }
      };
      for (const line of lines) {
        if (line.startsWith("- ")) {
          flushText();
          listItems.push(parseInline(line.slice(2)));
        } else {
          flushList();
          textLines.push(line);
        }
      }
      flushText();
      flushList();
    }
  });
  return blocks;
}

function MathSpan({ latex, display }: { latex: string; display: boolean }) {
  const html = useMemo(
    () =>
      katex.renderToString(latex, {
        displayMode: display,
        throwOnError: false,
        strict: "ignore",
        output: "htmlAndMathml",
      }),
    [latex, display],
  );
  if (display) {
    return <div className="my-3 overflow-x-auto py-1" dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function InlineSegments({ segments }: { segments: Segment[] }) {
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "math" ? (
          <MathSpan key={i} latex={seg.value} display={false} />
        ) : seg.type === "bold" ? (
          // Un segment gras peut contenir des maths (« **droite $y = x$** ») :
          // on re-parse son contenu (pas de gras imbriqué possible).
          <strong key={i} className="font-semibold">
            {parseInline(seg.value).map((sub, j) =>
              sub.type === "math" ? (
                <MathSpan key={j} latex={sub.value} display={false} />
              ) : (
                <span key={j}>{sub.value}</span>
              ),
            )}
          </strong>
        ) : (
          <span key={i}>{seg.value}</span>
        ),
      )}
    </>
  );
}

export default function MathText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const blocks = useMemo(() => parseBlocks(children), [children]);
  return (
    <div className={`space-y-2 leading-relaxed ${className}`}>
      {blocks.map((block, i) => {
        if (block.type === "math") return <MathSpan key={i} latex={block.latex} display />;
        if (block.type === "list")
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-6">
              {block.items.map((item, j) => (
                <li key={j}>
                  <InlineSegments segments={item} />
                </li>
              ))}
            </ul>
          );
        return (
          <p key={i}>
            <InlineSegments segments={block.segments} />
          </p>
        );
      })}
    </div>
  );
}
