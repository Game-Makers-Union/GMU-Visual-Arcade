import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* Add 404 handler page */}
      </Routes>
    </HashRouter>
  );
}

export default App;
