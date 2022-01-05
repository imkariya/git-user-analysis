import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GitUserComponent from "./component/gitUserComponent";
import GitRepoComponent from "./component/gitRepoComponent";
import "./App.css";
import NavBarComponent from "./component/navbarComponent";
import NotFoundComponent from "./component/notFoundComponent";

const App = () => {
  return (
    <Container>
      <div className="app">
        <Router>
          <div className="app-header">
            <NavBarComponent />
          </div>
          <Routes>
            <Route exact path="/" element={<GitUserComponent />} />
            <Route
              exact
              path="git-user-detail"
              element={<GitUserComponent />}
            />
            <Route exact path="git-user-repos" element={<GitRepoComponent />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
};

export default App;
