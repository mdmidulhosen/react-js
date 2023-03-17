 import Aman from './midul.js';
import './App.css';
import Dhoni from './component/Dhoni';
import Gorib from './component/Gorib';
import Moddhobitto from './component/Moddhobitto';



function App() {

let name = "Midul Hosen Kibria";
let balance = 20;

if(balance <= 10){
  return <Gorib/>
}else if(balance > 11 && balance <= 20){
 return <Moddhobitto/>
}else{
 return <Dhoni/>
}

  return (
    <div className='container'>
      

       {/* {oldAge >= 18 ? <Dhoni/> : <Gorib/>} */}
    </div>
  );
}


export default App;
