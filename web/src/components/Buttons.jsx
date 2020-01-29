import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FA from "react-fontawesome";

const StyledCircleButton = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  border: 1px solid black;
`;
const StyledBigBlackButton = styled.div``;

export const BackButton = props => {
  return (
    <Link to="/">
      <StyledCircleButton>
        <FA name={"x"} />
      </StyledCircleButton>
    </Link>
  );
};

export const SourcesButton = props => {
  return (
    <Link to="/sources">
      <StyledCircleButton>
        <FA name={"inbox"} />
      </StyledCircleButton>
    </Link>
  );
};

export const AddOrSearchButton = props => {
  return (
    <Link to="/add-or-search">
      {" "}
      <StyledCircleButton>
        <FA name={"plus"} />
      </StyledCircleButton>
    </Link>
  );
};

export const HistoryButton = props => {
  return (
    <Link to="/history">
      {" "}
      <StyledCircleButton>
        <FA name={"clock"} />
      </StyledCircleButton>
    </Link>
  );
};
