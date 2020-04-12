import React from "react";
import { EditorState } from "draft-js";
import StyleButton from "./style-button";

const BLOCK_TYPES = [
  { key: "h1", label: "H1", style: "header-one" },
  { key: "h2", label: "H2", style: "header-two" },
  { key: "h2", label: "H3", style: "header-three" },
  { key: "h3", label: "H4", style: "header-four" },
  { key: "h4", label: "H5", style: "header-five" },
  { key: "h5", label: "H6", style: "header-six" },
  { key: "quote", label: `"Q"`, style: "blockquote" },
  { key: "ul", label: "ul", style: "unordered-list-item" },
  { key: "ol", label: "ol", style: "ordered-list-item" },
  { key: "codeblock", label: "{ }", style: "code-block" },
];

type Props = {
  editorState: EditorState;
  onToggle: any;
};

const BlockStyleControls: React.FC<Props> = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <ul className="controls">
      {BLOCK_TYPES.map((type) => (
        <li key={type.key}>
          <StyleButton
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        </li>
      ))}
    </ul>
  );
};

export default BlockStyleControls;
