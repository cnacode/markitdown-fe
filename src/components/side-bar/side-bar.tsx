import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";
import NotesList from "./note-list";
import MenuActions from "./menu-actions";

const SideBarContainer = styled.div`
    position: absolute;
    float: left;
    margin-top: 2.5rem;
    max-width: 16.7%;
    ul{
        list-style: none;
        margin:0;
        padding: 0;
    }
    border-right: 1px #535353 solid;
    height: 100%;
    font-family: 'Goudy Bookletter 1911', serif;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(90, 90, 90, .5);
        box-shadow: 0 0 0.5px rgba(255, 255, 255, .5);
    }
`
type Props = {
  theme?: any;
  status: number;
};

const SideBarComponent: React.FC<Props> = (props) => {
const onClick = (e: any) => {
    console.log(e)
}

  return (
    <SideBarContainer>
        <MenuActions/>
        <NotesList onClick={onClick}/>
    </SideBarContainer>
  );
};

const mapStateToProps = (state: RootType) => ({
  status: state.note.status,
});

const SideBar = connect(mapStateToProps)(SideBarComponent);

export default SideBar;
