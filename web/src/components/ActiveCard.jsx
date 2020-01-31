import React from "react";
import styled from "styled-components";
import { BackButton, WideCircleButton } from "./Buttons";

const StyledActiveCard = styled.div`
  line-height: 1.2;
  h1 {
    font-weight: 300;
    font-size: 2em;
  }

  p {
    font-size: 1em;
  }
  border: 2px solid black;
  box-shadow: 0 0.6em 0 rgba(0, 0, 0, 0.06);
  border-radius: 1.8em;
  height: 100vh;
  position: absolute;
  background: white;
  padding: 1.5em;
  width: 100vw;
  box-sizing: border-box;
`;

const BottomNav = styled.nav`
  position: absolute;
  bottom: 4.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div + div {
    margin-left: 0.6em;
  }

  div {
    margin-top: 1.5em;
    display: flex;
  }
`;

export const ActiveCard = ({ activeCard, activeCardClicked }) => {
  return (
    <>
      <StyledActiveCard>
        <h1>{activeCard.title}</h1>
        <p>{activeCard.body}</p>
      </StyledActiveCard>
      <BottomNav>
        <div>
          <WideCircleButton>Downrank</WideCircleButton>
          <WideCircleButton>Uprank</WideCircleButton>
        </div>
        <div onClick={activeCardClicked}>
          <BackButton />
        </div>
      </BottomNav>
    </>
  );
};
