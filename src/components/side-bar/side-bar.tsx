import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'

import NotesList from './note-list'
import MenuActions from './menu-actions'

const SideBarContainer = styled.div`
  position: absolute;
  float: left;
  max-width: 16.7%;
  min-width: 215px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  border-right: 1px #535353 solid;
  height: 100%;
  font-family: 'IM Fell English', serif;
`
type Props = {
  theme?: any
}

const SideBarComponent: React.FC<Props> = (props) => {
  const onClick = (e: any) => {
    console.log(e)
  }

  return (
    <SideBarContainer>
      <MenuActions />
      <NotesList onClick={onClick} />
    </SideBarContainer>
  )
}

const mapStateToProps = (state: ApplicationStore) => ({})

const SideBar = connect(mapStateToProps)(SideBarComponent)

export default SideBar
