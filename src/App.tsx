import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <HashRouter basename='/'>

      <NavigationBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        {/* Add 404 handler page */}
      </Routes>
    </HashRouter>
  );
}

export default App;
