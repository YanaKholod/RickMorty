import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CharacterDetailsPage from "./components/CharacterDetailsPage";

const Home = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
