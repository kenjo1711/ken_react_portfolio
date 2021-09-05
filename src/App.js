import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing.js';
import About from './pages/About.js';
import Education from './pages/Education.js';
import Experience from './pages/Experience.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/about' component={About} />
        <Route path='/education' component={Education} />
        <Route path='/experience' component={Experience} />
        <Route path='/contact' component={Contact} />
      </Switch>

      {/* Footer */}
      <Footer />

    </Router>

    // <Router>
    //   <Navbar />
    //   <Home />
    //   <About />
    // </Router>
  );
}

export default App;