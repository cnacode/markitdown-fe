import React, { FC } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";
import { truncateString } from "core/utils";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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

type Note = {
    key: string,
    title: string,
    body: string,
    date: string,
}

const notes: Note[] = []

const note = {
    key: 'demo1',
    title: 'demo title its long long long',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    date:  (new Date()).toLocaleDateString(),
};


for(let i=0; i< 30; i++){
    const titem: Note = {...note, key: i.toString()}
    notes.push(titem)
}

type Props = {
  theme?: any;
  onClick: any;
};

const NotesListComponent: FC<Props> = (props) => {
    const {onClick} = props;
  return (
    <ul>
    {notes.map(item => {
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
  );
};

const mapStateToProps = (state: RootType) => ({
  status: state.note.status,
});

const NotesList = connect(mapStateToProps)(NotesListComponent);

export default NotesList;
