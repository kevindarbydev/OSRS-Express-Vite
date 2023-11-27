import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Lookup from "./pages/Leagues.tsx";
import Leagues from "./pages/Leagues.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="leagues" element={<Leagues />} />
      <Route path="hiscores" element={<Lookup />} />
    </Routes>
  </BrowserRouter>
);
