import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "../header";
import { Home, Contacts, About, Blog } from "../../pages";

import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Home />} />
        <Route exact path="/about" caseSensitive={false} element={<About />} />
        <Route exact path="/contact" caseSensitive={false} element={<Contacts />} />
        <Route exact path="/blog" caseSensitive={false} element={<Blog />} />
      </Routes>
    </div>
  );
};
