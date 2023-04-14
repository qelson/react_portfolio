import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './pages/About'; 
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <div className="App">
    <Header />

    <About/>
    <Portfolio/>
    </div>
  );
}

export default App;
