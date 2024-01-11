import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books/Books";
import Add from "./pages/Add/Add";
import Update from "./pages/Update/Update";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
