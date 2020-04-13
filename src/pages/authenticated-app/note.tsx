import React, { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputNote from "components/input-note";
import TopNav from "components/top-nav";
import { setNote, setStatus } from "core/note";
import { RootType } from "core/store";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import SideBar from "components/side-bar";

const PageContainer = styled.div`
  overflow-y: hidden;
  .container {
    margin-top: 1rem;
    max-height: 40%;
  }

  #content {
    padding: 0;
  }
`;

type Props = {
  theme?: any;
  note: string;
};

let timer = setTimeout(() => {}, 0);

const NotePage: FC<Props> = (props) => {
  const { note } = props;

  const saveNote = (value: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setNote(value);
      setStatus("saved");
    }, 2000);
  };

  return (
    <PageContainer>
      <TopNav />
      <SideBar />
      <Container fluid>
        <Row className="justify-content-end">
          <Col id="content" lg={10}>
            <InputNote note={note} saveNote={saveNote} />
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = (state: RootType) => ({
  note: state.note.currentNote,
});

const Note = connect(mapStateToProps, { setNote, setStatus })(NotePage);

export default Note;
