import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

const App = () => {
  const [edit, setEdit] = useState("");
  // const [preview, setPreview] = useState("");

  return (
    <div className="text-center p-5">
      <h1 className="markdown-heading">Markdown Editor</h1>
      <div className="container">
        <textarea
          name="editor"
          id="editor"
          cols="30"
          rows="10"
          className="editor-text"
          value={edit}
          onChange={(event) => setEdit(event.target.value)}
        ></textarea>
        <h2 className="preview-heading">Preview</h2>
        <Preview markdown={edit} />
      </div>
    </div>
  );
};
const Preview = ({ markdown }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    ></div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
