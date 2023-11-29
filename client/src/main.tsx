import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from "@chakra-ui/react";
import './index.css'
import Hiscores from "./pages/Hiscores.tsx";
import Leagues from "./pages/Leagues.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Leagues" element={<Leagues />} />
        <Route path="HiScores" element={<Hiscores />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
