import React, { FC } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";
import { FaSearch } from 'react-icons/fa'

type Props = {
  theme?: any;
  status: number;
};

const Actions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #535353;
`;

const Action = styled.li`
  .input-icons { 
    margin-left: 9.5rem;
    margin-top: 0.35rem;
    position: absolute;
    font-size: 1.3rem;
    color: #ccc;
  }
`;

const SearchBox = styled.input`
  border: none;
  height: 2rem;
  font-size: 1.2rem;
  width: 75%;
  padding: 0.5rem;
`


const MenuActionsComponent: FC<Props> = (props) => {
  return (
    <Actions>
      <Action><FaSearch className="input-icons"/><SearchBox placeholder="Search notes" id="search-box"/></Action>
    </Actions>
  );
};

const mapStateToProps = (state: RootType) => ({
  status: state.note.status,
});

const MenuActions = connect(mapStateToProps)(MenuActionsComponent);

export default MenuActions;
