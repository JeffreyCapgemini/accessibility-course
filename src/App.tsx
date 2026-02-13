import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Course1 from './pages/Course1';
import Navigation from './components/navigation/navigation';

const App = () => {
  return (<>
   <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Course1 />} />
    </Routes>
  </>
  );
};

export default App;
