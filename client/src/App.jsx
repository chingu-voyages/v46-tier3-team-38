import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar";
import ViewRecipeDetails from "./pages/viewRecipeDetails";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/explore" exact element={<Explore />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<SignUp />} />
          <Route path="/forgetPassword" exact element={<ForgetPassword />} />
          <Route path="/dashboard" exact element={<DashboardPage />} />
          <Route path="/viewRecipeDetails/:recipeID" element={<ViewRecipeDetails />} />
          <Route
                 path="/" element={<Navigate to="/explore" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
