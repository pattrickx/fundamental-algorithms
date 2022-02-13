import FibonacciCard from '../components/FibonacciCard';
import PrimeCard from '../components/PrimeCard';
import SumCard from '../components/SumCard';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      
      <PrimeCard/>
      <SumCard/>
      <FibonacciCard/>
      <PrimeCard/>
      <PrimeCard/>
      <PrimeCard/>
    </div>
  );
}

export default App;
