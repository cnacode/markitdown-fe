import React, { Fragment, ReactDOM } from "react";
import styled from "@emotion/styled";
import { FaListOl } from "react-icons/fa";
import Icon from "./icon";

type Props = {
  style: any;
  active: boolean;
  label: any;
  onToggle: (e: any) => void;
};

const StyleWrapper = styled.span`
  .styleButton {
    color: ${({ active }: any) => (active ? "#5890ff" : "#999")};
    cursor: pointer;
    margin: 0.25rem;
    padding: 0.25rem;
    display: inline-block;
    border: 1px red solid;
  }

  .BOLD {
    font-weight: 800;
  }
  .ITALIC {
    font-style: italic;
  }
  .UNDERLINE {
    text-decoration: underline;
  }
  .CODE {
    font-family: monospace;
  }
  .header-one {
    font-size: 1.2rem;
  }
  .header-two {
    font-size: 1.1rem;
  }
  .header-three {
    font-size: 1rem;
  }
  .header-four {
    font-size: 0.9rem;
  }
  .header-five {
    font-size: 0.8rem;
  }
  .header-six {
    font-size: 0.7rem;
  }
  .blockquote {
    font-style: italic;
    font-weight: 600;
  }
`;

const StyleButton: React.FC<Props> = (props) => {
  const { style, label } = props;

  const onToggle = (e: any) => {
    e.preventDefault();
    props.onToggle(style);
  };

  return (
    <StyleWrapper>
      <span className={`styleButton ${style}`} onMouseDown={onToggle}>
        <Icon label={label} />
      </span>
    </StyleWrapper>
  );
};

export default StyleButton;
