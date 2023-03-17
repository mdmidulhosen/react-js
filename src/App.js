 import Aman from './midul.js';
import './App.css';
// import Dhoni from './component/Dhoni';
// import Gorib from './component/Gorib';
// import Moddhobitto from './component/Moddhobitto';
import SIngleFriend from './component/SIngleFriend.js';




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

    friends.map(
      (friend)=>{
        return(
          <SIngleFriend
          name = {friend.name}
          balance = {friend.balance}
          home = {friend.home}
          />
        )
      }
    )
  
    )
}


export default App;
