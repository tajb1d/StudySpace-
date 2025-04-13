import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="page">
      <h1>🚀 Welcome to StudySpace</h1>
      <p>Find the best places to study, rated by college students like you.</p>
      <nav>
        <Link to="/submit">Submit a StudySpace</Link>
      </nav>
    </div>
  );
}

function SubmitSpot() {
  return (
    <div className="page">
      <h1>📍 Submit a StudySpace</h1>
      <p>Let others know about your favorite study spot!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitSpot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
