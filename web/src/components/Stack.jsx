import React, { useState } from "react";
import { SummaryCard } from "./SummaryCard";
import styled from "styled-components";
import { ActiveCard } from "./ActiveCard";
import _ from "lodash";
import {
  AddOrSearchButton,
  BackButton,
  HistoryButton,
  SourcesButton
} from "./Buttons";

const StyledStack = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BottomNavigation = styled.div`
  position: absolute;
  bottom: 90px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const Stack = props => {
  const [activeCardId, setActiveCardId] = useState();

  const cardComponents = props.cards
    .filter((card, i) => {
      return i < 3;
    })
    .map(({ id, title, body }, i) => {
      return (
        <SummaryCard
          key={id.toString()}
          stackIndex={i}
          id={id}
          title={title}
          body={body}
        />
      );
    })
    .reverse();

  if (activeCardId) {
    console.log(_.find(props.cards, x => x.id === activeCardId));
    return (
      <>
        <ActiveCard
          // id={id}
          // title={title}
          // body={body}
          activeCardId={activeCardId}
        />
        ;
        <BackButton />
      </>
    );
  } else {
    return (
      <>
        <StyledStack setActiveCardId={setActiveCardId}>
          {props.cards.length ? cardComponents : <div>Loading...</div>}
        </StyledStack>
        <BottomNavigation>
          <SourcesButton />
          <AddOrSearchButton />
          <HistoryButton />
        </BottomNavigation>
      </>
    );
  }
};
