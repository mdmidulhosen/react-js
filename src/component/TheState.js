import {useState} from 'react'
export default function TheState() {
const [balance, setBalance] = useState(20);

const [name, setName] = useState("Mridul");

const [randomNumber, setRandomNumber] = useState(randomNumbert());

function randomNumbert(){
    return Math.floor(Math.random() * 10);
    setRandomNumber(randomNumber())
}
  
const clickHere = ()=>{
    setBalance(balance + randomNumber)
    setName(name == "Mridul" ? "Towhid" : "Mridul");
    setRandomNumber(randomNumbert())



}
  return (
    <>
    <button onClick={clickHere}>Earn $20 in every click</button>
    <h3>Your Balance is ${balance}</h3>
    <h3>My name is {name}</h3>
    <h3>Random ammount is {randomNumber}</h3>
    </>
    // <div>My balance is {balance}</div>
  )
}
