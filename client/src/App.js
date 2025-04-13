import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import './App.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 33.8816, // Example coordinates, CSUF
  lng: -117.8854
};

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="page">
              <h1>🚀 Welcome to StudySpace</h1>
              <p>Find the best places to study, rated by college students like you.</p>
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center} />
              </GoogleMap>
              <nav>
                <Link to="/submit">Submit a StudySpace</Link>
              </nav>
            </div>
          } />
          <Route path="/submit" element={<SubmitSpot />} />
        </Routes>
      </div>
    </Router>
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

export default App;
