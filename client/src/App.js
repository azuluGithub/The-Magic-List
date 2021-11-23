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
      <div className="app-section">
        <div className="app-section-wrappers">
          <h2 className="app-section-title">Current</h2>
          <div className='app-current-container'>

          </div>
        </div>
        <div className="app-section-wrappers">
          <h2 className="app-section-title">Complete</h2>
          <div className='app-complete-container'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
