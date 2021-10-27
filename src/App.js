import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import About from './screens/About';
import Footer from './components/Footer';
import Contact from './screens/Contact';

function App() {
  return (
    <div>
        <Home />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
