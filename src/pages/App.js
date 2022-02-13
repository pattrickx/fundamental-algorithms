import FibonacciCard from '../components/FibonacciCard';
import MdcCard from '../components/MdcCard';
import PrimeCard from '../components/PrimeCard';
import SumCard from '../components/SumCard';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      
      <PrimeCard/>
      <SumCard/>
      <FibonacciCard/>
      <MdcCard/>
      <PrimeCard/>
      <PrimeCard/>
    </div>
  );
}

export default App;
