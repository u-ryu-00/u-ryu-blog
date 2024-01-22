import { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import { MDEditorProps } from '@uiw/react-md-editor';
import dynamic from 'next/dynamic';

import '@uiw/react-markdown-preview/markdown.css';
import '@uiw/react-md-editor/markdown-editor.css';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

const MDViewer = dynamic(() => import('@uiw/react-markdown-preview'), {
  ssr: false,
});

export function MarkdownEditor({ ...rest }: MDEditorProps) {
  return (
    <div data-color-mode="light">
      <MDEditor {...rest} />
    </div>
  );
}

export function MarkdownViewer({ ...rest }: MarkdownPreviewProps) {
  return (
    <div>
      <MDViewer {...rest} />
    </div>
  );
}
