import React, { FC, Fragment, useState } from "react";
import styled from "@emotion/styled";
import { EditorState, convertFromRaw, RichUtils } from "draft-js";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { connect } from "react-redux";
import { updateNote } from "core/note";
import { RootType } from "core/store";
import BlockedStyleControls from "./block-controls";
import InlineStyleControls from "./inline-controls";
import Editor from "./editor";
import { markdownToDraft } from "markdown-draft-js";

const StyleEditor = styled.div`
  margin-top: 13%;
`;
const StyleControls = styled.div`
  position: fixed;
  margin-left: 45%;
  background-color: #eee;
  opacity: opaque;

  .controls {
    list-style: none;
    margin: 0;
    padding: 0.25rem;
  }
`;

type Props = {
  theme?: any;
  note: string;
  updateNote?: any;
};

const InputNoteComponent: FC<Props> = (props) => {
  const { note, updateNote } = props;
  const rawContent = markdownToDraft(note, { escapeMarkdownCharacters: false });
  const contentState = convertFromRaw(rawContent);
  const content = EditorState.createWithContent(contentState);
  const [editorState, setEditorState] = useState(content);

  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const onChange = (state: EditorState) => {
    setEditorState(state);
    updateNote(state);
  };

  return (
    <Fragment>
      <StyleControls>
        <BlockedStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
      </StyleControls>
      <StyleEditor>
        <Editor editorState={editorState} onChange={onChange} />
      </StyleEditor>
    </Fragment>
  );
};

const mapStateToProps = (state: RootType) => ({
  note: state.note.currentNote,
});

const InputNote = connect(mapStateToProps, { updateNote })(InputNoteComponent);

export default InputNote;
