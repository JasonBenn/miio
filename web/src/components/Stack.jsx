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
  margin: 0 20px;
  margin-top: 60px;
`;

const BottomNavigation = styled.div`
  position: absolute;
  bottom: 90px;
  display: flex;
`;

export const Stack = props => {
  const [activeCardId, setActiveCardId] = useState();

  const cardComponents = props.cards
    .map(({ id, title, body }, i) => (
      <SummaryCard
        stackIndex={i}
        id={id}
        title={title}
        body={body}
      ></SummaryCard>
    ))
    .reverse();

  if (activeCardId) {
    console.log(_.find(props.cards, x => x.id === activeCardId));
    return (
      <div>
        <ActiveCard
          // id={id}
          // title={title}
          // body={body}
          activeCardId={activeCardId}
        />
        ;
        <BackButton />
      </div>
    );
  } else {
    return (
      <div>
        <StyledStack setActiveCardId={setActiveCardId}>
          {props.cards.length ? cardComponents : <div>Loading...</div>}
        </StyledStack>
        <BottomNavigation>
          <SourcesButton />
          <AddOrSearchButton />
          <HistoryButton />
        </BottomNavigation>
      </div>
    );
  }
};
