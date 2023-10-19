import './App.css'
import SearchBox from './components/SearchBox';

function App() {

  return (
    <>
      <div>
        <div class="text-xl font-medium text-red-600">Recigo</div>
        <p class="text-slate-500">You have a new recipe!</p>
        <SearchBox />
      </div>
    </>
  );
}

export default App
