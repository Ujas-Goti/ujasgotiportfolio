import { HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import StarfieldBackground from './components/StarfieldBackground';

const App = () => {
  return (
    <>
      <StarfieldBackground />
      <HashRouter>
        <Home />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
