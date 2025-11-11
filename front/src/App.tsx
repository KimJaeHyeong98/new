import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
 {/* info import */}
import Infokaisha from "./info/Infokaisha"; 
import Infokaishasignup from "./info/Infokaishasignup";
import Infokaishalogin from "./info/Infokaishalogin";
import JhHome from "./info/main/JhHome"
 {/* info import */}
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
        <Route path="/login" element={<Infokaishalogin />} />
        <Route path="/signup" element={<Infokaishasignup />} />
        <Route path="/home" element={<JhHome />} />
        <Route path="/info" element={<div>인사정보 페이지</div>} />
        <Route path="/vacation" element={<div>휴가신청 페이지</div>} />
        {/* info Route */}
      </Routes>
    </Router>
  );
}

export default App;
