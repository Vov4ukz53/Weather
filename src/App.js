import { WeatherPage } from "./features/weatherPage";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/" element={<Navigate to="/weather" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
