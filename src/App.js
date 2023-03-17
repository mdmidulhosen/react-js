 import Aman from './midul.js';
import './App.css';

let name = "Midul Hosen Kibria";
let oldAge = 18;


function App() {
  return (
    <div className='container'>
      <h1 style={{textAlign:"center",fontSize:"72px"}}>My name is {name}</h1>
      <h1 style={{textAlign:"center",fontSize:"72px"}}>My age is {name == "Midul Hosen" ? 100 : 50}</h1>
      <Aman name = {name} oldAge = {oldAge}></Aman>
    </div>
  );
}


export default App;
