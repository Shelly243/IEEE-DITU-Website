import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import TeamsPage from "./pages/teams/TeamsPage";
import EventsPage from "./pages/events/EventsPage";
import Contact from "./pages/contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Gallery from "./pages/gallery/Gallery";    
import Footer from "./Components/Footer/Footer"  

function App() {
  const handleMembership = () => {
    window.open("https://www.ieee.org/membership/join/index.html", "_blank");
  };
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <div className="membershipButton">
          <button className="membership" onClick={handleMembership}>Want to be IEEE global member ?</button>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
