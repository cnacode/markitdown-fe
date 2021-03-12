import React, { FC, useEffect } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import { truncateString } from 'core/utils'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InfiniteScroll from 'react-infinite-scroller'
import { getNotesTotalNumber, listNotes, setCurrentNote } from 'core/services/note'
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
  font-family: 'Roboto Slab';
  p,
  li,
  a,
  td,
  th {
    font-size: 1.15rem !important;
    color: #414141 !important;
  }
`
const NoteDate = styled(Col)`
  margin: 0;
  margin-left: 1rem;
  font-family: 'Noto Sans JP';
`

type Props = {
  theme?: any
  onClick: any
  notes: {}
  totalNumberOfNotes: Number
  getNotesTotalNumber: any
  listNotes: any
  updateCurrentNote: any
  setCurrentNote: any
}

const NotesListComponent: FC<Props> = (props) => {
  let { notes, totalNumberOfNotes, getNotesTotalNumber, listNotes, setCurrentNote } = props

  const noteList: Note[] = Object.values(notes)

  const getData = () => {
    getNotesTotalNumber()
  }

  const onClick = (key: string, item: Note) => {
    setCurrentNote(key)
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
        {noteList.map((item) => {
          const { key, body, date } = item
          return (
            <StyledNote key={key} onClick={() => onClick(key, item)}>
              <NoteBody>
                <ReactMarkdown source={truncateString(body, 35)} />
              </NoteBody>
              <NoteFooter className="justify-content-end">
                <NoteDate xs={12} md={8}>
                  {date}
                </NoteDate>
              </NoteFooter>
            </StyledNote>
          )
        })}
      </InfiniteScroll>
    </Notes>
  )
}

const mapStateToProps = (state: ApplicationStore) => ({
  notes: state.note.list,
  totalNumberOfNotes: state.note.notesTotalNumber,
})

const mapDispatchToProps = {
  getNotesTotalNumber,
  listNotes,
  setCurrentNote,
}

const NotesList: any = connect(mapStateToProps, mapDispatchToProps)(NotesListComponent)

export default NotesList
