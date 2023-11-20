import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import "../styles/summaryStyling.css";
import logo from "../assets/logo.png";

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 20px 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px;
    background-color: white;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Link to={"/"}>
        <img src={logo} />
      </Link>
    </HeaderWrapper>
  );
}

export default Header;
