import React from "react";
import { EditorState } from "draft-js";
import StyleButton from "./style-button";

const INLINE_STYLES = [
  { key: "bold", label: "U", style: "BOLD" },
  { key: "italic", label: "U", style: "ITALIC" },
  { key: "underline", label: "U", style: "UNDERLINE" },
  { key: "code", label: "Code", style: "CODE" },
];

type Props = {
  editorState: EditorState;
  onToggle: any;
};

const InlineStyleControls: React.FC<Props> = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <ul className="controls">
      {INLINE_STYLES.map((type) => (
        <li key={type.key}>
          <StyleButton
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        </li>
      ))}
    </ul>
  );
};

export default InlineStyleControls;
