import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Infokaisha from "./info/infokaisha"; // 추가
import Infokaishasignup from "./info/infokaishasignup";
import Letter from "./letter/Letter";

function Food() {
  return <h2>맛집랭킹 페이지입니다.</h2>;
}

function Quiz() {
  return <h2>일본어 단어 퀴즈 페이지입니다.</h2>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Infokaisha />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/food" element={<Food />} />
        <Route path="/quiz" element={<Quiz />} />

        {/* info Route */}
        <Route path="/login" element={<Infokaisha />} />
        <Route path="/signup" element={<Infokaishasignup />} />
        {/* info Route */}
      </Routes>
    </Router>
  );
}

export default App;
