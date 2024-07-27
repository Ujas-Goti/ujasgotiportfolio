import { HashRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import NotFound from './components/NotFound';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> {/* Handle not found routes */}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
