import React from "react";
import styled from "styled-components";

const StyledFullCard = styled.div`
  font-family: Helvetica Neue;
  line-height: 1.2;
  h1 {
    font-weight: 300;
    font-size: 40px;
  }

  p {
    font-size: 20px;
  }
  border: 1px solid black;
  box-shadow: 0px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 36px;
  height: 380px;
  position: absolute;
  background: white;
  padding: 30px;
  width: 275px;
  transform: scale(${props => Math.pow(0.75, props.stackIndex)});
  margin-top: ${props => {
    switch (props.stackIndex) {
      case 0:
        return 0;
      case 1:
        return 80;
      case 2:
        return 140;
      default:
        throw Error("uhh");
    }
  }}px;
`;

export const SummaryCard = ({ stackIndex, id, title, body }) => {
  return (
    <StyledFullCard key={id} stackIndex={stackIndex}>
      <h1>{title}</h1>
      <p>{body}</p>
    </StyledFullCard>
  );
};
