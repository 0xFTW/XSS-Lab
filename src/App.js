import Level1 from './components/level1';
import Level2 from './components/level2';
import Level3 from './components/level3';
import Secure from './components/secure';
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Level1></Level1>
      <Level2></Level2>
      <Level3></Level3>
      <Secure>`</Secure>
    </div>
  );
}

export default App;
