import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/Services/ServiceDetail';
import { Contact } from './pages/Contact';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { LoadingPage } from './components/LoadingPage/LoadingPage';
import { servicesSegment } from './routes/services';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="om-oss" element={<About />} />
        <Route path={servicesSegment}>
          <Route index element={<Services />} />
          <Route path=":slug" element={<ServiceDetail />} />
        </Route>
        <Route path="kontakt" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
