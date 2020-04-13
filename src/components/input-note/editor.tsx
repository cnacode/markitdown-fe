import React, { FC, Fragment } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";
import 'react-markdown-editor-lite/lib/index.css';
import MdEditor from 'react-markdown-editor-lite'

const StyledEditor = styled.div``;

type Props = {
  theme?: any;
  onChange: any;
  value: string;
};

const EditorComponent: FC<Props> = (props) => {
  const { value, onChange } = props;

  return (
    <Fragment>
      <StyledEditor>
        <MdEditor 
        onChange={onChange} 
        value={value} 
        renderHTML={(text) => (<p></p>)}
        />
      </StyledEditor>
    </Fragment>
  );
};

const mapStateToProps = (state: RootType) => ({
  note: state.note.currentNote,
});

const Editor = connect(mapStateToProps)(EditorComponent);

export default Editor;
