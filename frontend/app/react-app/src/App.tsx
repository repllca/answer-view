import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './pages/HomeView';
import {ChakraProvider} from '@chakra-ui/react';
import KadaiBordView from './pages/KadaiBoardView';
import LoginView from './pages/LoginView';
import RegistrationView from './pages/RegistrationView';
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/Registar" element={<RegistrationView />} />
            <Route path="/kadai_api" element={<KadaiBordView />} />
            <Route path="/singin" element={<KadaiBordView />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;