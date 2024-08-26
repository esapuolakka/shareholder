import "./App.css";
import { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HeaderNavBar from "./Header";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/home")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Router>
        <HeaderNavBar />
        <Routes>
          <Route
            path="/osakasluettelo"
            element={<div>Osakasluettelo Placeholder</div>}
          />
          <Route
            path="/osakenumerot"
            element={<div>Osakenumerot Placeholder</div>}
          />
          <Route
            path="/merkintahistoria"
            element={<div>Merkintähistoria Placeholder</div>}
          />
          <Route
            path="/osakkaidentiedot"
            element={<div>Osakkaiden tiedot Placeholder</div>}
          />
          <Route
            path="/lisaa-uusi"
            element={<div>Lisää uusi Placeholder</div>}
          />
        </Routes>
      </Router>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
