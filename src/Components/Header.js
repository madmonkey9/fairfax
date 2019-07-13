import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 20px;
  padding: 10px 10px;
  background-color: rgba(20, 20, 20, 0.7);
  height: 50px;
  width: 100%;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 100px;
`;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Home</SLink>
      </Item>
      <Item>
        <SLink to="/estimate">Estimate</SLink>
      </Item>
      <Item>
        <SLink to="/login">LogIn</SLink>
      </Item>
    </List>
  </Header>
);
