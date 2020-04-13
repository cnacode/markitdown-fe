import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { truncateString } from "core/utils";

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

const StyledNote = styled.li`
    border-bottom: 1px #535353 solid;
    :hover{
        background-color: #dfdfdf;
        cursor: pointer;
    }
`;

const NoteTop = styled(Row)`
    border-bottom: 1px #eee solid;
    padding: 0rem;
    margin:0;
`
const NoteBottom = styled(Row)`
    padding: 0.2rem 1rem 0.5rem 1.5rem;
`
const NoteDate = styled(Col)`
    margin: 0;
    margin-left: 1rem;
`


enum SideBarItemTypes {
    note = 0,
}

type NoteItem = {
    key: string,
    type: SideBarItemTypes,
    title: string,
    body: string,
    date: string,
}

const sidebarItems: NoteItem[] = []

const item = {
    key: 'demo1',
    type: SideBarItemTypes.note,
    title: 'demo title its long long long',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    date:  (new Date()).toLocaleDateString(),
};

for(let i=0; i< 30; i++){
    const titem: NoteItem = {...item, key: i.toString()}
    sidebarItems.push(titem)
}



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
        <ul>
        {sidebarItems.map(item => {
            const {key, body, date} = item;
            return (
            <StyledNote key={key} onClick={()=>onClick(key)}>
                <NoteTop className="justify-content-end">
                    <NoteDate lg={5}>{date}</NoteDate>
                </NoteTop>
                <NoteBottom>
                    {truncateString(body, 80)}
                </NoteBottom>
            </StyledNote>
            )
        })}
        </ul>
    </SideBarContainer>
  );
};

const mapStateToProps = (state: RootType) => ({
  status: state.note.status,
});

const SideBar = connect(mapStateToProps)(SideBarComponent);

export default SideBar;
