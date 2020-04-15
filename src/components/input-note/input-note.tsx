import React, { FC, Fragment } from "react";
import styled from "@emotion/styled";
import "react-mde/lib/styles/css/react-mde-all.css";
import { PreviewNote } from "components/preview-note";
import "react-markdown-editor-lite/lib/index.css";
import MdEditor from "react-markdown-editor-lite";

const StyleEditor = styled.div`
  .rc-md-editor {
    border: none;
    font-family: "Goudy Bookletter 1911", serif;
    height: 94.4vh;

    .rc-md-navigation {
      background-color: white;
      border-bottom: 1px solid #eee;
    }

    .sec-md {
      textarea {
        font-size: 1.15rem !important;
        ::-webkit-scrollbar {
          -webkit-appearance: none;
          width: 4px;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background-color: rgba(90, 90, 90, 0.5);
          box-shadow: 0 0 0.5px rgba(255, 255, 255, 0.5);
        }
      }
    }

    .sec-html {
      .section-container {
        ::-webkit-scrollbar {
          -webkit-appearance: none;
          width: 4px;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 4px;
          background-color: rgba(90, 90, 90, 0.5);
          box-shadow: 0 0 0.5px rgba(255, 255, 255, 0.5);
        }
        .custom-html-style {
          p,
          li,
          a,
          td,
          th {
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
