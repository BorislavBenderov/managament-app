import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";
import { Login, Management, Register } from "./pages";
import { ProtectedRoutes } from "./components/protected-routes/ProtectedRoutes";

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/register" element={<Register />} />
              <Route path="/management" element={<Management />} />
            </Route>
          </Routes>
        </div>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
