import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sponsors from "./Pages/Sponsors/Sponsors";
import Team from "./Pages/Team/Team";
import Contact from "./Pages/Contact/Contact";
import Event1 from "./Pages/EventPages/Event1";
import Event2 from "./Pages/EventPages/Event2";
import Event6 from "./Pages/EventPages/Event6";
import Event7 from "./Pages/EventPages/Event7";
import Event5 from "./Pages/EventPages/Event5";
import Event4 from "./Pages/EventPages/Event4";
import Event3 from "./Pages/EventPages/Event3";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="event1" element={<Event1 />} />
          <Route path="event2" element={<Event2 />} />
          <Route path="event3" element={<Event3 />} />
          <Route path="event4" element={<Event4 />} />
          <Route path="event5" element={<Event5 />} />
          <Route path="event6" element={<Event6 />} />
          <Route path="event7" element={<Event7 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
