import { HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <HashRouter>
      <Home />
      <Footer />
    </HashRouter>
  );
}

export default App;
