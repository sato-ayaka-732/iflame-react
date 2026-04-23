import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./iFlames/pages/default/Home";
import Count from "./iFlames/pages/1/Count";
import StringEdit from "./iFlames/pages/1/StringEdit";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
        <Route path="/string-edit" element={<StringEdit />} />
      </Routes>
    </HashRouter>
  );
}

export default App;