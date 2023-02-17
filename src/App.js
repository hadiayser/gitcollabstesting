import logo from './logo.svg';
import './App.css';
import './recipies.css';
import RecipieCard from './components/RecipieCard';

function App() {
  return (
    <div className='container'>
    <header>
      <h1>Oppskrifter:D</h1>
    </header>
    <main>
      <RecipieCard title="pizza" ingress="italiano"/>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
