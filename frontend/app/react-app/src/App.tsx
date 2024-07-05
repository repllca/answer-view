import React from 'react';
import { BrowserRouter as Router, Routes, Route ,useParams} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomeView from './pages/HomeView';
import KadaiBordView from './pages/KadaiBoardView';
import LoginView from './pages/LoginView';
import RegistrationView from './pages/RegistrationView';
import KadaiDetail from './component/KadaiDetail';
import KadaiDetailView from './pages/KadaiDetailView';

const KadaiBoardView : React.FC() => {
  const {id} = useParams<{id: string}>(); 
  return <div></div>
};


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <div>
        <Router>
          <div>
            <Routes>
              <Route path="/login" element={<LoginView />} />
              <Route path="/registar" element={<RegistrationView />} />
              <Route path="/kadai_api" element={<KadaiBordView />} />
              <Route path="/singin" element={<KadaiBordView />} />
              <Route path="/home" element={<HomeView />} />
              <Route path="/detail/:id" element={<KadaiDetailView />} /> {/* 動的ルート */}
            </Routes>
          </div>
        </Router>
      </div>
    </ChakraProvider>
  );
};

export default App;
