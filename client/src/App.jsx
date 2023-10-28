import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import Explore from "./pages/Explore";
import SearchResult from "./pages/SearchResult";
import UserRegistration from "./pages/UserRegistration";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="/registration" element={<UserRegistration />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/result/:term" element={<SearchResult />} /> 
      </Routes>
    </Router>
  );
}

export default App;
