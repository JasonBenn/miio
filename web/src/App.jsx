import React, { useState, useEffect } from "react";
import { getCards } from "./api";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Stack } from "./components/Stack";
import { Sources } from "./components/Sources";
import { History } from "./components/History";
import { AddOrSearch } from "./components/AddOrSearch";

function Example(props) {
  return (
    <div>
      <p>You clicked {props.count} times</p>
      <button onClick={() => props.setCount(props.count + 1)}>Click me</button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    // }, [count]);
  }, [count]);

  useEffect(() => {
    getCards().then(response => {
      console.log(response.data);
      setCards(response.data);
    });
  }, []);

  return (
    <Router>
      <div>
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
            <Stack cards={cards} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Cards() {
  return <h2>Cards</h2>;
}