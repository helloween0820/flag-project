import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CountryList } from "../components/CountryList";
import { CountryPages } from "../components/CountryPages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/CountryList" element={<CountryList />} />
        <Route path="/Country/:name" element={<CountryPages />} />
      </Routes>
    </BrowserRouter>
  );
};
