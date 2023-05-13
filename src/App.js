import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dida from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/auth" element={<Dida />} />
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
