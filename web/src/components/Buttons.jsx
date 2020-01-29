import React from "react";
import { Link } from "react-router-dom";

export const BackButton = props => {
  return (
    <div>
      <Link to="/">X</Link>
    </div>
  );
};

export const SourcesButton = props => {
  return (
    <div>
      <Link to="/sources">Sources</Link>
    </div>
  );
};

export const AddOrSearchButton = props => {
  return (
    <div>
      <Link to="/add-or-search">Add or Search</Link>
    </div>
  );
};

export const HistoryButton = props => {
  return (
    <div>
      <Link to="/history">History</Link>
    </div>
  );
};
