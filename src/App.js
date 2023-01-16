import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UserContextProvider } from "./contexts/UserContext";
import { Login, Management, Register } from "./pages";

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/management" element={<Management />} />
          </Routes>
        </div>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
