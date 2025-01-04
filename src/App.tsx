import "./styles.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoutes from "./services/PrivateRoutes";
import AuthProvider from "./services/AuthProvider";
import Login from "./pages/Login/Login";
import MyBurger from "./components/MyBurger/MyBurger";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<MyBurger />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default App;
