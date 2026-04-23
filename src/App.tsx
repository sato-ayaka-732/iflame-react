import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/default/Home";
import Count from "./iflames/1/Count";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;