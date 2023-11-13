import UserLandingPage from "../components/userLandingPage";
import AuthProvider from "../context/AuthContext";
function DashboardPage() {
  return (
    <AuthProvider>
      <UserLandingPage />
    </AuthProvider>
  );
}

export default DashboardPage;