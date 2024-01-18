import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MakrkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
