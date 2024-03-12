import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CountryDetails from "./components/CountryDetails";
import CountryListing from "./components/CountryListing";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CountryListing />} />
        <Route path="/details/:alpha3Code" element={<CountryDetails />} />
        <Route path="*" element={<CountryListing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
