import React, { FC } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Editor from 'components/write-note'
import TopNav from 'components/top-nav'
import { updateNote, setStatus } from 'core/services/note'

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
  note: string
  updateNote: any
  setStatus: any
}

let timer = setTimeout(() => {}, 0)

const CurrentNotePage: FC<Props> = (props) => {
  const { note, updateNote, setStatus } = props

  const saveNote = (value: string) => {
    clearTimeout(timer)
    setStatus('saving')
    timer = setTimeout(() => {
      updateNote(value)
      setStatus('saved')
    }, 3000)
  }

  return (
    <PageContainer>
      <TopNav />
      <SideBar />
      <Container fluid>
        <Row className="justify-content-end">
          <Col id="content" lg={10}>
            <Editor note={note} saveNote={saveNote} />
          </Col>
        </Row>
      </Container>
    </PageContainer>
  )
}

const mapStateToProps = (state: ApplicationStore) => ({
  note: state.note.currentNote,
})

const Note = connect(mapStateToProps, { updateNote, setStatus })(CurrentNotePage)

export default Note
