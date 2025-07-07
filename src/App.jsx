import { Routes, Route } from 'react-router-dom';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';

function App() {
  return (
    <Routes>
      <Route path="/lightsaber-escape" element={<Desktop />} />
      <Route path="/lightsaber-escape/mobile" element={<Mobile />} />
    </Routes>
  );
}

export default App;
