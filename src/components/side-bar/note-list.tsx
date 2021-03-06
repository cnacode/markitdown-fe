import React, { FC, useEffect } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { truncateString } from 'core/utils'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InfiniteScroll from 'react-infinite-scroller'
import {
  getNotesTotalNumber,
  listNotes,
  updateCurrentNote,
  saveCurrentNoteLocal,
  saveCurrentNoteRemote,
} from 'core/services/note'
import ReactMarkdown from 'react-markdown'

const Notes = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 85vh;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(90, 90, 90, 0.5);
    box-shadow: 0 0 0.5px rgba(255, 255, 255, 0.5);
  }
`
const StyledNote = styled.div`
  border-bottom: 1px #535353 solid;
  :hover {
    background-color: #dfdfdf;
    cursor: pointer;
  }
`

const NoteFooter = styled(Row)`
  border-top: 1px #eee solid;
  padding: 0rem;
  margin: 0;
`
const NoteBody = styled(Row)`
  padding: 0.2rem 1rem 0.2rem 1.5rem;
`
const NoteDate = styled(Col)`
  margin: 0;
  margin-left: 1rem;
`

type Props = {
  theme?: any
  onClick: any
  notes: any[]
  totalNumberOfNotes: Number
  getNotesTotalNumber: any
  listNotes: any
  updateCurrentNote: any
  saveCurrentNoteLocal: any
  saveCurrentNoteRemote: any
}

const NotesListComponent: FC<Props> = (props) => {
  let {
    notes,
    totalNumberOfNotes,
    getNotesTotalNumber,
    listNotes,
    updateCurrentNote,
    saveCurrentNoteLocal,
    saveCurrentNoteRemote,
  } = props
  if (!notes || !notes[0]) notes = []

  const getData = () => {
    getNotesTotalNumber()
  }

  const onClick = async (key: string, item: Note) => {
    await saveCurrentNoteLocal(item)
    await saveCurrentNoteRemote(item)
    updateCurrentNote(key)
  }

  const limit = 10
  let hasMore = true
  let loadMore = (page: number) => {
    hasMore = page * limit < totalNumberOfNotes
    listNotes(page, limit)
  }
  useEffect(getData, [])

  return (
    <Notes>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow={false}
      >
        {notes.map((item) => {
          const { key, body, date } = item

          return (
            <StyledNote key={key} onClick={() => onClick(key, item)}>
              <NoteBody>
                <ReactMarkdown source={truncateString(body, 35)} />
              </NoteBody>
              <NoteFooter className="justify-content-end">
                <NoteDate lg={5}>{date}</NoteDate>
              </NoteFooter>
            </StyledNote>
          )
        })}
      </InfiniteScroll>
    </Notes>
  )
}

const mapStateToProps = (state: ApplicationStore) => ({
  notes: state.note.notes,
  totalNumberOfNotes: state.note.notesTotalNumber,
})

const mapDispatchToProps = {
  getNotesTotalNumber,
  listNotes,
  updateCurrentNote,
  saveCurrentNoteLocal,
  saveCurrentNoteRemote,
}

const NotesList: any = connect(mapStateToProps, mapDispatchToProps)(NotesListComponent)

export default NotesList
