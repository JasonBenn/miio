import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Add, Close, History, MoveToInbox } from "@material-ui/icons";

export const CircleButton = styled.div`
  width: 3.5em;
  height: 3.5em;
  border-radius: 3.5em;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.6em 0 rgba(0, 0, 0, 0.06);
  svg {
    font-size: 2em;
  }
`;

export const WideCircleButton = styled(CircleButton)`
  width: 7.5em;
`;

export const StyledAddOrSearchButton = styled(CircleButton)`
  background-color: black;
  color: white;
  font-weight: bold;
  width: 5.7em;
  height: 5.7em;
  svg {
    font-size: 3.5em;
  }
`;

export const BackButton = props => {
  return (
    <Link to="/">
      <CircleButton>
        <Close />
      </CircleButton>
    </Link>
  );
};

export const SourcesButton = props => {
  return (
    <Link to="/sources">
      <CircleButton>
        <MoveToInbox />
      </CircleButton>
    </Link>
  );
};

export const AddOrSearchButton = props => {
  return (
    <Link to="/add-or-search">
      {" "}
      <StyledAddOrSearchButton>
        <Add />
      </StyledAddOrSearchButton>
    </Link>
  );
};

export const HistoryButton = props => {
  return (
    <Link to="/history">
      {" "}
      <CircleButton>
        <History />
      </CircleButton>
    </Link>
  );
};
