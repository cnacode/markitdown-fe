import React, { FC } from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'

const StyledNav = styled(Nav)`
  border-bottom: 1px #e0e0e0 solid;
  width: 100%;
  margin: 0;
  z-index: 99;
  background-color: #fff;
  font-family: 'Noto Sans JP', serif;
  a {
    color: #414141;
    font-size: 1.4rem;
    font-weight: 400;
  }
`

const Status: any = styled(Nav.Link)`
  color: ${(props: any) => (props.status === 0 ? 'black' : '')};
  font-size: 0.85rem !important;
  margin-top: 0.5rem;
`
type Props = {
  theme?: any
  status: number
}

const TopNavComponent: FC<Props> = (props) => {
  const { status } = props

  return (
    <StyledNav>
      <Nav.Item>
        <Nav.Link>Howdy, Sina.</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Status status={status}>{status === 0 ? '(Saving...)' : '(All good)'}</Status>
      </Nav.Item>

      <Nav.Item className="ml-auto">
        <Nav.Link eventKey="account" href="/account">
          Settings
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="ml-1">
        <Nav.Link eventKey="disabled" disabled>
          Logout
        </Nav.Link>
      </Nav.Item>
    </StyledNav>
  )
}

const mapStateToProps = (state: ApplicationStore) => ({
  status: state.note.syncStatus,
})

const TopNav = connect(mapStateToProps)(TopNavComponent)

export default TopNav
