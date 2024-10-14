import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Akun from "./pages/Akun";
import Topup from "./pages/Topup";
import Transaction from "./pages/Transaction";
import Payment from "./pages/Payment";
import ProtectedRoute from "./components/ProtectedRoute";
import UnProtectedRoute from "./components/UnProtectedRoute";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<UnProtectedRoute />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/top-up" element={<Topup />} />
          <Route path="/akun" element={<Akun />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/payment/:code" element={<Payment />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
