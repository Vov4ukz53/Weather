import { WeatherPage } from "./features/weatherPage";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/main" element={<WeatherPage />} />
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
