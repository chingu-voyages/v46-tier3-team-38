import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLoginPage from "./pages/UserLoginPage";
import ViewRecipeDetails from "./pages/viewRecipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLoginPage />} />
        <Route path="/viewRecipeDetails/:recipeID" element={<ViewRecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
