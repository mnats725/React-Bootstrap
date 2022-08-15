import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../../../pages/Home/Home";
import About from "../../../pages/About/About";
import Contacts from "../../../pages/Contacts/Contacts";
import Blog from "../../../pages/Blog/Blog";

const RoutesForHeader = () => (
  <div>
    <Router>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Home />} />
        <Route exact path="/about" caseSensitive={false} element={<About />} />
        <Route
          exact
          path="/contact"
          caseSensitive={false}
          element={<Contacts />}
        />
        <Route exact path="/blog" caseSensitive={false} element={<Blog />} />
      </Routes>
    </Router>
  </div>
);

export default RoutesForHeader;
