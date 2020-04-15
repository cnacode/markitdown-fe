import React, { FC } from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { RootType } from "core/store";
import Nav from "react-bootstrap/Nav";

const StyledNav = styled(Nav)`
  border-bottom: 1px #535353 solid;
  width: 100%;
  margin:0;
  z-index: 99;
  background-color: #fff;
  font-family: "IM Fell English", serif;
  a {
    color: #414141;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

const Status: any = styled(Nav.Link)`
  color: ${(props: any) => (props.status === 0 ? "black" : "")};
  font-size: 1rem !important;
  margin-top: 0.3rem;
`;
type Props = {
  theme?: any;
  status: number;
};

const TopNavComponent: FC<Props> = (props) => {
  const { status } = props;

  return (
    <StyledNav>
      <Nav.Item className="ml-2">
        <Nav.Link href="/home">Howdy, Sina.</Nav.Link>
      </Nav.Item>
      <Nav.Item className="ml-3">
        <Nav.Link eventKey="link-2">Account</Nav.Link>
      </Nav.Item>
      <Nav.Item className="ml-3">
        <Status status={status}>{status === 0 ? "(Syncing...)" : "(Synced)"}</Status>
      </Nav.Item>
      
      <Nav.Item className="ml-auto">
        <Nav.Link eventKey="disabled" disabled>
          Logout
        </Nav.Link>
      </Nav.Item>
    </StyledNav>
  );
};

const mapStateToProps = (state: RootType) => ({
  status: state.note.status,
});

const TopNav = connect(mapStateToProps)(TopNavComponent);

export default TopNav;
