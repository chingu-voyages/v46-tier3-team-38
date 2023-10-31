import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import Explore from "./pages/Explore";
import SearchResult from "./pages/SearchResult";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/result/:term" element={<SearchResult />} />
      </Routes>
    </Router>

  );
}

export default App;
