import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import TeamsPage from "./pages/teams/TeamsPage";
import EventsPage from "./pages/events/EventsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
