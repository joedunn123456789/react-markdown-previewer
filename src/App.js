import React, { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [markdown, setMarkdown] = useState('# Welcome to your Markdown Previewer!');

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Markdown Previewer</h1>
      <textarea
        className="form-control mb-3"
        rows="10"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div className="border p-3 bg-light">
        <MarkdownPreview source={markdown} />
      </div>
    </div>
  );
}

export default App;