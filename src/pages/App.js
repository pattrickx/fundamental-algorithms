import CountCard from '../components/CountCard';
import FibonacciCard from '../components/FibonacciCard';
import MdcCard from '../components/MdcCard';
import PrimeCard from '../components/PrimeCard';
import QuicksortCard from '../components/QuicksortCard';
import SumCard from '../components/SumCard';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      
      <PrimeCard/>
      <SumCard/>
      <FibonacciCard/>
      <MdcCard/>
      <QuicksortCard/>
      <CountCard/>
    </div>
  );
}

export default App;
