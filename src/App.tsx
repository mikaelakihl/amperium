import { Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<About />} />
        <Route path="/tjanster" element={<Services />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
