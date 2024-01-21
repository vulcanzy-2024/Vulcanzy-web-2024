import HostelAccomodation from "./pages/HostelAccomodation";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";
import EventsPage from "./pages/Events";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div className="min-h-[100vh] flex flex-col  overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/hostelAccomodation" element={<HostelAccomodation />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
