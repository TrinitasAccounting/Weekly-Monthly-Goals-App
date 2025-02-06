import react from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
// import Logout from './pages/Logout';
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

//This makes sure that we clear the local storage and dont have any access tokens cached that could be stored with the register by accident
function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/logout"
          element={<Logout />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
