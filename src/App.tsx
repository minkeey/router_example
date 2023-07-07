import './App.css';
import { Root, About } from './pages';
import { Router, Route } from './components/react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={<Root />} />
        <Route path='/about' component={<About />} />
      </Router>
    </div>
  );
}

export default App;
