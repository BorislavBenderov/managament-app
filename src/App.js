import { Route, Routes } from "react-router-dom";
import { Login, Management, Register } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </div>
  );
}

export default App;
