 import Aman from './midul.js';
import './App.css';
// import Dhoni from './component/Dhoni';
// import Gorib from './component/Gorib';
// import Moddhobitto from './component/Moddhobitto';




function App() {

  let friends = ["Midul", "Mehedi", "Pial", "Nayef", "Yasin"]


  return (

    <ul>
      {

        friends.map((friendz)=>{
          return <li>{friendz}</li>
        }
        
        )

      }
    </ul>
  
    )
}


export default App;
