import React, { FC, Fragment } from "react";
import styled from "@emotion/styled";
import "react-mde/lib/styles/css/react-mde-all.css";
import { PreviewNote } from "components/preview-note";
import "react-markdown-editor-lite/lib/index.css";
import MdEditor from "react-markdown-editor-lite";

const StyleEditor = styled.div`
  margin-top: 2.5rem;
  max-height: 90vh;
  .rc-md-editor {
    border: none;
    font-family: "Goudy Bookletter 1911", serif;
    height: 90vh;

    .rc-md-navigation {
      background-color: white;
    }

    .sec-md {
      textarea {
        font-size: 1.15rem !important;
      }
    }
    .sec-html {
      .section-container {
        .custom-html-style {
          p,
          li,
          a {
            font-size: 1.15rem !important;
          }
        }
      }
    }
  }
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
