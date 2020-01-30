import _ from "lodash";
import React, { useEffect, useState } from "react";
import { getCards } from "./api";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Stack } from "./components/Stack";
import { Sources } from "./components/Sources";
import { History } from "./components/History";
import { AddOrSearch } from "./components/AddOrSearch";

export default function App() {
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

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/sources">
          <Sources />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/add-or-search">
          <AddOrSearch />
        </Route>
        <Route path="/">
          <div onClick={stackClicked}>
            <Stack activeCard={activeCard} cards={cards} />
          </div>
        </Route>
      </Switch>
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
    </Router>
  );
}
