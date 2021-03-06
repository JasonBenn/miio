import React, { useEffect, useState } from "react";
import { getCards } from "./api";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Stack } from "./components/Stack";
import { Sources } from "./components/Sources";
import { History } from "./components/History";
import { AddOrSearch } from "./components/AddOrSearch";

export default function App() {
  return (
    <Router>
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
          <Stack />
        </Route>
      </Switch>
    </Router>
  );
}
