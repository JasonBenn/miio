import React from "react";
import styled from "styled-components";

const StyledSummaryCard = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  border: 1px solid black;
  box-shadow: 0px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 36px;
`;

const StyledFullCard = styled.div`
  border: 1px solid black;
  box-shadow: 0px 12px 0px rgba(0, 0, 0, 0.06);
  border-radius: 36px;
  height: 380px;
  position: absolute;
  background: white;
  padding: 30px;
  margin-top: ${props => props.stackIndex * 26}px;
  width: calc(275px - ${props => props.stackIndex * 45}px);
`;

export const SummaryCard = ({
  stackIndex,
  id,
  title,
  body,
  setActiveCardId
}) => {
  console.log(stackIndex);
  return (
    <StyledFullCard key={id} stackIndex={stackIndex}>
      <div>{title}</div>
      <div>{body}</div>
    </StyledFullCard>
  );
};
