import React, { FC, Fragment } from "react";
import styled from "@emotion/styled";
import "react-mde/lib/styles/css/react-mde-all.css";
import { PreviewNote } from "components/preview-note";
import "react-markdown-editor-lite/lib/index.css";
import MdEditor from "react-markdown-editor-lite";

const StyleEditor = styled.div`
  margin-top: 4rem;
`;

type Props = {
  theme?: any;
  note: string;
  saveNote?: any;
};

const InputNote: FC<Props> = (props) => {
  const { note, saveNote } = props;
  const [value, setValue] = React.useState(note);

  const onChange = ({ text }: any) => {
    setValue(text);
    saveNote(text);
  };

  return (
    <Fragment>
      <StyleEditor>
        <MdEditor
          onChange={onChange}
          value={value}
          renderHTML={(text) => Promise.resolve(<PreviewNote value={text} />)}
        />
      </StyleEditor>
    </Fragment>
  );
};

export default InputNote;
