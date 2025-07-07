import { Routes, Route } from 'react-router-dom';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';

function App() {
  return (
    <Routes>
      <Route path="" element={<Desktop />} />
      <Route path="/mobile" element={<Mobile />} />
    </Routes>
  );
}

export default App;
