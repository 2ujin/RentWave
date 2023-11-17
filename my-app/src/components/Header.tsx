import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import "../ComponentStyling/summaryStyling.css";
import logo from "../images/logo.png";

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 20px 50px;
  background-color: white;

  img {
    width: 50px;
    background-color: white;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} />
    </HeaderWrapper>
  );
}

export default Header;
