import React, { FC } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";

type Props = {
  theme?: any;
  status: number;
};

const MenuActionsComponent: FC<Props> = (props) => {
  return (<p></p>);
};

const mapStateToProps = (state: RootType) => ({
  status: state.note.status,
});

const MenuActions = connect(mapStateToProps)(MenuActionsComponent);

export default MenuActions;
