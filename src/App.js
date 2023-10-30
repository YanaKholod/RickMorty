import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/HomePage"));
const Details = lazy(() => import("./pages/Details"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Details />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
