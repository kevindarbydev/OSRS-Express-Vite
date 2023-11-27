import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" h-full w-full bg-gradient-to-r from-sky-500 to-indigo-500">
      <App />
    </div>
  </React.StrictMode>
);
