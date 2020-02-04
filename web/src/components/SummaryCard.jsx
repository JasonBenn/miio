import React, { useState } from "react";
import styled from "styled-components";
import Hammer from "react-hammerjs";

const StyledSummaryCard = styled.div`
  font-family: Helvetica Neue;
  line-height: 1.2;
  h1 {
    font-weight: 300;
    font-size: 40px;
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

export const SummaryCard = props => {
  const { stackIndex, id, title } = props;
  const [classString, setClassString] = useState("");

  function onPan(event) {
    if (event.deltaX <= 0 || event.deltaX >= 0) {
      setClassString("moving");
      if (event.deltaX === 0) return;
      if (event.center.x === 0 && event.center.y === 0) return;
      const xMulti = event.deltaX * 0.03;
      const yMulti = event.deltaY / 80;
      const rotate = xMulti * yMulti;
      event.target.style.transform = `translate(${event.deltaX}px, ${event.deltaY}px) rotate(${rotate}deg)`;
    }
  }

  function onPanEnd(event) {
    if (event.deltaX <= 0 || event.deltaX >= 0) {
      setClassString("");
      const moveOutWidth = document.body.clientWidth;
      const keep = Math.abs(event.deltaX) < 150;
      if (keep) {
        event.target.style.transform = "";
      } else {
        setClassString("removed");
        const endX = Math.max(
          Math.abs(event.velocityX) * moveOutWidth,
          moveOutWidth
        );
        const toX = event.deltaX > 0 ? endX : -endX;
        const endY = Math.abs(event.velocityY) * moveOutWidth;
        const toY = event.deltaY > 0 ? endY : -endY;
        const xMulti = event.deltaX * 0.03;
        const yMulti = event.deltaY / 80;
        const rotate = xMulti * yMulti;
        event.target.style.transform = `translate(${toX}px, ${toY +
          event.deltaY}px) rotate(${rotate}deg)`;

        if (props.onSwipe) props.onSwipe(props);
        if (toX < 0 && props.onSwipeLeft) {
          props.onSwipeLeft(props);
        } else if (props.onSwipeRight) {
          props.onSwipeRight(props);
        }
      }
    }
  }

  return (
    <Hammer onPan={onPan} onPanEnd={onPanEnd} className={classString}>
      <StyledSummaryCard key={id} stackIndex={stackIndex}>
        <h1>{title}</h1>
      </StyledSummaryCard>
    </Hammer>
  );
};
