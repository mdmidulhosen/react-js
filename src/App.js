 import Aman from './midul.js';
import './App.css';
// import Dhoni from './component/Dhoni';
// import Gorib from './component/Gorib';
// import Moddhobitto from './component/Moddhobitto';




function App() {

  let friends = [
    {
      name : "Midul",
      balance : 50,
      home : "Narayanganj"
    },
    {
      name : "Mehedi",
      balance : 30,
      home : "Pabna"
    },
    {
      name : "Yasin",
      balance : 20,
      home : "Chadpur"
    },
  ]


  return (

    <ul>
      {

        friends.map((friend)=>{
          return <li>{friend.name} has {friend.balance}Tk, and he is living in {friend.home}</li>
        }
        
        )

      }
    </ul>
  
    )
}


export default App;
