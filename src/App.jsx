// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
