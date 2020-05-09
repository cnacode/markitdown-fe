import React, { FC, Fragment } from "react";
import styled from "@emotion/styled";
import { PreviewNote } from "components/view-note";
import "react-markdown-editor-lite/lib/index.css";
import MdEditor from "react-markdown-editor-lite";

const StyleEditor: any = styled.div`
  .rc-md-editor {
    border: none;
    font-family: "IM Fell English", serif;
    height: 94.4vh;

    .rc-md-navigation {
      background-color: white;
      border-bottom: 1px solid #eee;

      i {
        font-size: 1.5rem;
        margin: 0 0.25rem;
      }
    }

    /* .editor-container{
      direction: rtl;
    } */

    .sec-md {
      /* direction: ltr; */
      textarea {
        font-family: monospace;
        line-height: 2 !important;
        font-size: 1.4rem !important;

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
      /* direction: ltr; */
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
            color: #414141 !important;
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

const Editor: FC<Props> = (props) => {
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
          config={{
            syncScrollMode: ["leftFollowRight", "rightFollowLeft"],
          }}
        />
      </StyleEditor>
    </Fragment>
  );
};

export default Editor;
