import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import Explore from "./pages/Explore";
import SearchResult from "./pages/SearchResult";
import Navbar from "./components/Navbar";
import ViewRecipeDetails from "./pages/viewRecipeDetails";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/result/:term" element={<SearchResult />} />
        <Route path="/viewRecipeDetails/:recipeID" element={<ViewRecipeDetails />} />
      </Routes>
    </Router>

  );
}

export default App;
