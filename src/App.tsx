import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/HomePage"));
const Details = lazy(() => import("./pages/Details"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Details />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
