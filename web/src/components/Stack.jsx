import React, { useEffect, useState } from "react";
import { SummaryCard } from "./SummaryCard";
import styled from "styled-components";
import { ActiveCard } from "./ActiveCard";
import { AddOrSearchButton, HistoryButton, SourcesButton } from "./Buttons";
import { getCards } from "../api";
import _ from "lodash";

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

export const Stack = () => {
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState();

  useEffect(() => {
    getCards().then(response => {
      setCards(response.data);
    });
  }, []);

  const stackClicked = e => {
    setActiveCard(cards[0]);
  };

  const activeCardClicked = e => {
    e.stopPropagation();
    setActiveCard();
  };

  const getSummaryCardStyle = stackIndex => {
    const scale = Math.pow(0.75, stackIndex);
    let marginTopOffset = 0;
    switch (stackIndex) {
      case 1:
        marginTopOffset = 80;
        break;
      case 2:
        marginTopOffset = 140;
        break;
      default:
        marginTopOffset = 0;
    }
    return { transform: `scale(${scale})`, marginTop: `${marginTopOffset}px` };
  };

  function onSwipe(data) {
    setCards(_.drop(cards, 1));
    if (cards.length < 5) {
      getCards().then(response => {
        cards.push(...response.data);
        setCards([...cards]);
      });
    }
  }

  function onSwipeLeft(data) {
    console.log("onSwipeLeft", data);
  }

  function onSwipeRight(data) {
    console.log("onSwipeRight", data);
  }

  const cardComponents = cards
    .filter((card, i) => {
      return i < 3;
    })
    .map(({ id, title, body }, i) => {
      return (
        <SummaryCard
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          onSwipe={onSwipe}
          key={id.toString()}
          stackIndex={i}
          id={id}
          title={title}
          body={body}
          style={getSummaryCardStyle(i)}
        />
      );
    })
    .reverse();

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
        <div onClick={stackClicked}>
          <StyledStack>
            {cards.length ? cardComponents : <div>Loading...</div>}
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
