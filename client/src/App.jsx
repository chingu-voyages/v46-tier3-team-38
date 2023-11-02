import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import SearchResult from "./pages/SearchResult";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/registration" exact element={<SignUp />} />
        <Route path="/forgetPassword" exact element={<ForgetPassword />} />
        <Route path="/dashboard" exact element={<DashboardPage />} />
        <Route path="/explore" exact element={<Explore />} />
        <Route path="/result/:term" exact element={<SearchResult />} /> 
      </Routes>
    </Router>
  );
}

export default App;
