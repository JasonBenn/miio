import React, { useState } from "react";
import { FullCard } from "./FullCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ActiveCard } from "./ActiveCard";
import {
  AddOrSearchButton,
  BackButton,
  HistoryButton,
  SourcesButton
} from "./Buttons";

const StyledStack = styled.div`
  margin: 0 20px;
  margin-top: 60x;
`;

export const Stack = props => {
  const [activeCardId, setActiveCardId] = useState();

  const cardComponents = props.cards.map(({ id, title, body }) => (
    <FullCard id={id} title={title} body={body}></FullCard>
  ));

  if (activeCardId) {
    return (
      <div>
        <ActiveCard activeCardId={activeCardId} />;
        <BackButton />
      </div>
    );
  } else {
    return (
      <div>
        <StyledStack>
          {props.cards.length ? cardComponents : <div>Loading...</div>}
        </StyledStack>
        <nav>
          <SourcesButton />
          <AddOrSearchButton />
          <HistoryButton />
        </nav>
      </div>
    );
  }
};
