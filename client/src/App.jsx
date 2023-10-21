import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import SearchBox from './components/SearchBox';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="/explore" element={<SearchBox />} />
      </Routes>
    </Router>
  );
}

export default App;
