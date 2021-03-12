import React, { FC } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Editor from 'components/write-note'
import TopNav from 'components/top-nav'
import { saveNote } from 'core/services/note'

import { connect } from 'react-redux'
import styled from '@emotion/styled'
import SideBar from 'components/side-bar'

const PageContainer = styled.div`
  overflow-y: hidden;
  .container {
    margin-top: 1rem;
    max-height: 40%;
  }

  #content {
    padding: 0;
  }
`

type Props = {
  theme?: any
  notes: NoteInStore
  saveNote: any
  currentNoteId?: string
}

let timer = setTimeout(() => {}, 0)

const CurrentNotePage: FC<Props> = (props) => {
  const { notes, currentNoteId, saveNote } = props

  const note = currentNoteId ? notes[currentNoteId] : undefined

  const saveNoteOnTypeStop = (value: string) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (note)
        saveNote({
          ...note,
          body: value,
        })
    }, 300)
  }

  return (
    <PageContainer>
      <TopNav />
      <SideBar />
      <Container fluid>
        {note ? (
          <Row className="justify-content-end">
            <Col id="content" lg={10}>
              <Editor noteBody={note.body} saveNote={saveNoteOnTypeStop} />
            </Col>
          </Row>
        ) : (
          <div>no notes selected</div>
        )}
      </Container>
    </PageContainer>
  )
}

const mapStateToProps = (state: ApplicationStore) => ({
  notes: state.note.list,
  currentNoteId: state.note.currentNoteId,
})

const Note = connect(mapStateToProps, { saveNote })(CurrentNotePage)

export default Note
