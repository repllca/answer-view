import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './pages/HomeView';
import KadaiBordView from './pages/KadaiBoardView';
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/Home" element={<HomeView />} />
            <Route path="/kadai_api" element={<KadaiBordView />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;