import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorDashboard from '../src/pages/VendorDashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App
