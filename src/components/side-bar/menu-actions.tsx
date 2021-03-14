import React, { FC } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaSearch, FaPlus } from 'react-icons/fa'
import { MdSort } from 'react-icons/md'

type Props = {
  theme?: any
}

const Actions = styled.ul`
  font-family: 'Noto Sans JP';
  list-style: none;
  margin: 0;
  padding: 0;
`

const Action = styled.li`
  padding: 0;

  .input-icons {
    top: 10px;
    right: 20px;
    position: absolute;
    font-size: 1.7rem;
    color: #ccc;
    cursor: text;
  }

  border-bottom: 1px solid #bfbfbf;
`

const SearchBox = styled.input`
  border: none;
  height: 2.8rem;
  max-height: 2.8rem;
  font-size: 1.3rem;
  width: 100%;
  padding: 0 0 0 0.5rem;
  :hover {
    background-color: #eee;
  }
  :focus {
    outline: none;
  }
`

// const Sort = styled.span`
//   font-size: 2rem;
//   color: #888;
//   :hover {
//     background-color: #eee;
//   }
//   height: 100%;
//   width: 100%;
// `

const NewNoteButton = styled.button`
  background: #fff;
  height: 2.8rem;
  max-height: 2.8rem;
  border: none;
  box-shadow: none;
  padding: 0.1rem 0 0.4rem 0.1rem;
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
  :hover {
    background-color: #eee;
  }
  span {
    color: #414141;
    margin-left: 0.5rem;
  }
  //plus icon
  svg {
    color: #a8a7a7;
  }
`

const SearchContainer = styled.div`
  position: relative;
`

const MenuActionsComponent: FC<Props> = (props) => {
  return (
    <Actions>
      <Action>
        <NewNoteButton>
          <FaPlus />
          <span>New Note</span>
        </NewNoteButton>
      </Action>
      <Action>
        <SearchContainer>
          <SearchBox placeholder="Search notes" id="search-box" />
          <FaSearch className="input-icons" />
        </SearchContainer>
      </Action>
    </Actions>
  )
}

const mapStateToProps = (state: ApplicationStore) => ({})

const MenuActions = connect(mapStateToProps)(MenuActionsComponent)

export default MenuActions
