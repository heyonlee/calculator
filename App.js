import StarshipCard from "./StarshipCard"
import './App.css';
import StarwarsAPI from './services/sw-api';
import Header from "./Header";

function App() {
  


  return (
    <div className="App">
      <Header/>
     <StarwarsAPI/>
    </div>
  );
}

export default App;
