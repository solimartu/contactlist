import "./index.css";
import { Routes, Route } from "react-router-dom";
import List from "./components/List";
import Add from "./components/Add";
import Home from "./components/Home";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/list" element={<List />}></Route>
          <Route path="/add" element={<Add />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
