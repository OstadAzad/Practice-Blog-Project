import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx"
import CategoryPage from "./Pages/CategoryPage.jsx"
import DetailsPage from "./Pages/DetailsPage.jsx"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/category/:categoryID" element={<CategoryPage/>}/>
        <Route path="/details/:detailsID" element={<DetailsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;