import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sponsors from "./Pages/Sponsors/Sponsors";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="sponsors" element={<Sponsors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
