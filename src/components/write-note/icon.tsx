import React, {ReactDOM} from "react";
import { FaListOl } from "react-icons/fa";

type Props = {
  label: string;
};

const icons: any = {
    ol: <FaListOl />,
    ul: <p>ul</p>
}

const Icon: React.FC<Props> = (props) => {
  const { label } = props;
  if(icons[label]) return icons[label] 
  return <span>icon for {label}</span>
};

export default Icon;
