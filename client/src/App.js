//local imports
import './App.css';
import Header from './components/header/Header';
import NavBar from './components/nav_bar/NavBar';

/**
 * #app
 */
const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Header />
    </div>
  )
}

export default App;
