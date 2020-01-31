import React from "react";
import { SummaryCard } from "./SummaryCard";
import styled from "styled-components";
import { ActiveCard } from "./ActiveCard";
import { AddOrSearchButton, HistoryButton, SourcesButton } from "./Buttons";

const StyledStack = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 22.5em;
`;

// TODO: unify with BottomNav
const BottomNavigation = styled.div`
  position: absolute;
  bottom: 90px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const Stack = props => {
  const activeCardClicked = e => {
    e.stopPropagation();
    props.setActiveCard();
  };

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

  let activeCard = props.activeCard;

  // activeCard = {
  //   url: "http://localhost:8000/api/cards/3/",
  //   id: 3,
  //   title: "Depend on the context",
  //   body:
  //     "STRATEGY 1: We have a limited capacity to notice and remember things, so we use the current context to help inform what we should be paying attention to.\n\nThis helps us filter information.",
  //   is_archived: false,
  //   metadata: null,
  //   type: 3
  // };

  if (activeCard) {
    return (
      <ActiveCard
        activeCard={activeCard}
        activeCardClicked={activeCardClicked}
      />
    );
  } else {
    return (
      <>
        {" "}
        <div onClick={props.stackClicked}>
          <StyledStack>
            {props.cards.length ? cardComponents : <div>Loading...</div>}
          </StyledStack>
        </div>
        <BottomNavigation>
          <SourcesButton />
          <AddOrSearchButton />
          <HistoryButton />
        </BottomNavigation>
      </>
    );
  }
};
