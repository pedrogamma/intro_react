import  React from "react";
import  ReactDOM  from "react-dom";
import {useState} from 'react';
import MyButton from "./components/MyButton";
import Greeting from "./components/Greeting";
import StudentCard from "./components/StudentCard";
import StudentInfo from "./components/StudentInfo";
// class ExampleComponent extends Component {
//   render(){
//     return(
//       <div>
//           <h2>esto es un componente de clase</h2>
//       </div>
//     )
//   }
// }
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
};
const JsxElement = () =>{
  return (
  <h1>Esto es un elemento JSX</h1>
  )};
const Header = () => {
  return(
  <header style={headerStyles}>  
      <h1>Bienvenidos a React</h1>
      <h2>Empezando con React</h2>
      <h3>Librería de JS</h3>
      <p>Juez Dredd</p>
      <small>27 July, 2066 AD</small>
  </header>
  )};
  const mainStyles = {
    backgroundColor: 'grey',
  }
  const Main = () => {
    return(
      <main style={mainStyles}>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
        </ul>
      </main>
    )
  }
const Sum = () => {
    const[firstNumber, setFirstNumber] = useState();
    const[secondNumber, setSecondNumber] = useState();

    const[summation, setSummation] = useState(0);
  
  function calculate(){
    setSummation(firstNumber + secondNumber);
  }

  return(
      <div>
        <h2>Suma de dos números</h2>
        <input
          placeholder="Primer Número"
          type="number"
          value={firstNumber}
          onChange={(ev) => setFirstNumber(+ev.target.value)}
        />
        <input
          placeholder="Segundo número"
          type="number"
          value={secondNumber}
          onChange={(ev) => setSecondNumber(+ev.target.value)}
        />
        <br/>
        <button onClick={calculate}>Suma de los números</button>
        <p>Suma : {summation || "0"}</p>
      </div>
  )
}

const Footer = () => {
  return (
  <footer>
      <p>Copyright 2023</p>
  </footer>
)};

const app = 
  <div>
    <Greeting firstName = "Elias"/>
    <JsxElement/> 
    <Greeting firstName = "Sergio"/>
    <Header/>
    <Greeting firstName = "Raquel"/>
    <MyButton/>
    <Greeting firstName = "Kent"/>
    <Main/>
    <Sum/>
    <StudentCard name="Joseph" week={7} info= {{ city: "Mega-City", course: "Javascript" }}/>
    <StudentInfo>
      <StudentCard name="Joseph" week={7} info= {{ city: "Mega-City", course: "Javascript" }}/>
      <StudentCard name="Maritoñi" week={2} info= {{ city: "Linares", course: "Symphony" }}/>
    </StudentInfo>
    <Footer/>
  </div>;
const rootElement = document.getElementById("root");
ReactDOM.render(app,rootElement);

// import React from 'react';
// import ReactDOM from 'react-dom';



// // render App component and show it on screen
// ReactDOM.render(<App />, document.getElementById('root'));