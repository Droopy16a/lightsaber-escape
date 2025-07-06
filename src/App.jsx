import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mobile from './pages/Mobile'
import Desktop from './pages/Desktop'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;