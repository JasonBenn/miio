import React from "react";
import { BackButton } from "./Buttons";

export const ActiveCard = props => {
  const { id, title, body } = props.activeCard;
  console.log(props.activeCard);

  return (
    <div>
      ActiveCard
      <BackButton />
    </div>
  );
};
