import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Navbar/Sidebar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
