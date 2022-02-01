import Header from "./components/Header"
import './App.css';
import Bloque1 from "./components/Bloque1";
import Bloque2 from "./components/Bloque2";
import Bloque3 from "./components/Bloque3";


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="childSnapEffect">
          <Bloque1/> 
          <Bloque2/>
          <Bloque3/>
      </div>
    </div>
  );
}

export default App;
