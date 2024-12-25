// import logo from './logo.svg';
// import './App.css';
// import React from 'react';


// function Heading(){
//   return (<h1>This is an h1 hearding.</h1>)
// }

// // function Header(){
// //   return (<h1>Hello, Mahim</h1>)
// // }

// import { useRef } from 'react';
// function TextInputWithFocusButton() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// }

// function App() {
//   // return <Header/>;
//   return (
//     <div className="App">
//       {/* <TextInputWithFocusButton/> */}
//       This is the starting code for "your first component" ungraded lab
//       <Heading/>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// // import Heading from "./Heading";

// // function App() {
// //   return (
// //     <div className="App">
// //       <Heading firstName="Any name other than Bob" />
// //       <Heading firstName="Jack" />
// //     </div>
// //   );
// // }

// // export default App;



// import "./App.css";
// import Card from "./Card";

// function App(){
//   return(
//     <div className = "App">
//       <h1>Task: Add three Card elements</h1>
//       <Card h2= "First card's h2" h3 ="First card's h3"/>
//       <Card h2= "Second card's h2" h3 ="Second card's h3"/>
//       <Card h2= "Third card's h2" h3 ="Third card's h3"/>
//     </div>
//   );
// };



// import Btn from './Btn';
// import './App.css';

// function App(){
//   return(
//     <Btn/>
//   );
// };

// export default App;





// import './App.css';


// function App() {

//   function handleClick() {
//     let randomNum = Math.floor(Math.random() * 10) + 1;
//     console.log(randomNum);
//     let userInput = prompt('type a number');
//     alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//   }
  
//   return (
//    <div>
//    <h1>Task: Add a button and handle a click event</h1>
//    <button onClick={handleClick}>Guess the number between 1 and 10</button>
//    </div>
//   );
// }
  
// export default App;





// import { useState } from 'react';

// export default function InputComponent() { 
//   const [inputText, setText] = useState(''); 

//   function handleChange(e) { 
//     setText(e.target.value); 
//   } 

//   return ( 
//     <> 
//       <input value={inputText} onChange={handleChange} /> 
//       <p>You typed: {inputText}</p> 
//       <button onClick={() => setText('')}> 
//         Reset 
//       </button> 
//     </> 
//   ); 
// } 





// import {useState} from 'react';

// export default function RegisterForm(){
//   const [form, setForm] = useState(
//     {
//     firstName: '......',
//     lastName: '...',
//     email: '............@....com',
//   }
//   );

//   return (
//     <>
//       <label>
//         First name:
//         <input value = {form.firstName} onChange={e => {setForm({...form, firstName: e.target.value});}}/>
//       </label><br/>
//       <label>
//         Last name:
//         <input value = {form.lastName} onChange={e => {setForm({...form, lastName: e.target.value});}}/>
//       </label><br/>
//       <label>
//         Email:
//         <input value = {form.email} onChange={e => {setForm({...form, email: e.target.value});}}/>
//       </label>
//       <p>
//         {form.firstName}{' '}
//         {form.lastName}{' '}<br/>
//         ({form.email})
//       </p>
//     </>
//   );
// }




// function Main(props) { 
//   return <Header msg={props.msg} />; 
// };

// function Header(props) { 
//   return ( 
//     <div style={{ border: "10px solid black" }}> 
//       <h1>Header here</h1> 
//       <Wrapper msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Wrapper(props) { 
//   return ( 
//     <div style={{ border: "10px solid brown" }}> 
//       <h2>Wrapper here</h2> 
//       <Button msg={props.msg} /> 
//     </div> 
//   ); 
// };

// function Button(props) { 
//   return ( 
//     <div style={{ border: "20px solid orange" }}> 
//       <h3>This is the Button component</h3> 
//       <button onClick={() => alert(props.msg)}>Click me!</button> 
//     </div> 
//   ); 
// };

// function App() { 
//   return ( 
//     <Main  
//       msg="I passed through the Header and the Wrapper and I reached the Button component"  
//     /> 
//   ); 
// }; 

// export default App;





// import Nav from "./components/Nav";
// import Intro1 from "./components/Intro1";
// import Intro3 from "./components/Intro3";
// import Intro2 from "./components/Intro2";
// import Promo from "./components/Promo";
// import Footer from "./components/Footer";
// import "./App.css";

// import { Routes, Route, Link } from "react-router-dom";


// function App(){
//   return(
//     <div className="App">

//         <nav>
//           <Link to="/" className="nav-item">Nav</Link>
//           <Link to="/Intro1" className="nav-item">Intro1</Link>
//           <Link to="/Intro2" className="nav-item">Intro2</Link>
//           <Link to="/Intro3" className="nav-item">Intro3</Link>
//           <Link to="/Promo" className="nav-item">Promo</Link>
//           <Link to="/Footer" className="nav-item">Footer</Link>
//         </nav>

//       <Routes>
//         <Route path="/"  element = {<Nav/>}/>
//         <Route path="/Intro1"  element = {<Intro1/>}/>
//         <Route path="/Intro2"  element = {<Intro2/>}/>
//         <Route path="/Intro3"  element = {<Intro3/>}/>
//         <Route path="/Promo"  element = {<Promo/>}/>
//         <Route path="/Footer"  element = {<Footer/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App;






// import React from "react";
// import "./App.css";

// function App(){
//   const time = new Date();
//   const day = time.toLocaleString("en-us", {weekday: "long"});
//   const morning = (time.getHours() >= 6) && (time.getHours() <= 12);
//   let dayMessage;
  
  
//   if (day.toLowerCase() === "monday") {
//     dayMessage = `Happy ${day}`;
//   } else if (day.toLowerCase() === "tuesday") {
//     dayMessage = `${day}, four days to go`;
//   } else if (day.toLowerCase() === "wednesday") {
//     dayMessage = `${day}, half way there`;
//   } else if (day.toLowerCase() === "thursday") {
//     dayMessage = `${day}, start planning the weekend`;
//   } else if (day.toLowerCase() === "friday") {
//     dayMessage = `Woo-Hoo, the weekend is coming!!!`;
//   } else {
//     dayMessage = "Stay calm and keep having fun";
//   }
  

//   return(
//      <div className="App">
//       <h1> {dayMessage} </h1>
//       {morning ? <h2>Have you had breakfast yet?</h2> : ""}
//      </div>
//   );
// };

// export default App;

// import MyImage from './assets/images/me.jpg';
// import React from 'react';
// import './App.css';
// import ReactPlayer from 'react-player';

// function App() {

//   const randomImageUrl = "https://images.unsplash.com/photo-1496175362769-08a34d630326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
//   return (
//     <div className="App">
//       <h1>Hello, Mahim!</h1>
//       <img height={200} src={MyImage} alt="Description of MyImage" /><br />
//       <MyVideo /> <br />
//       <img height={200} src={require("./assets/images/me.jpg")} alt="Description of me.jpg" /><br />
//       <img height={200} src={randomImageUrl} />
//     </div>
//   );
// };

// const MyVideo = () => { return(
//   <ReactPlayer
//     url='https://www.youtube.chttps://www.youtube.com/watch?v=UdsO4SM4wKI&list=RDUdsO4SM4wKI&start_radio=1om/watch?v=hxMNYkLN7tI'
//     // width='400'
//     // height='600'
//     controls
//   />
// )
// }


// export default App;


// import React from "react"; 
// import "./App.css";
 
// function App() { 
 
//   const bird1 = new Audio( 
//     "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
//   ); 
 
//   const bird2 = new Audio( 
//     "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
//   ); 
 
//   function toggle1() { 
//     if (bird1.paused) { 
//       bird1.play(); 
//     } else { 
//       bird1.pause(); 
//     } 
//   }; 
 
//   function toggle2() { 
//     if (bird2.paused) { 
//       bird2.play(); 
//     } else { 
//       bird2.pause(); 
//     } 
//   }; 
 
//   return ( 
//     <div> 
//       <button onClick={toggle1}>Caspian Tern 1</button> 
//       <button onClick={toggle2}>Caspian Tern 2</button> 
//     </div> 
//   ); 
// } 
 
// export default App;



import React, { useState } from 'react';

const App = () => {
  // State for input value and total
  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle the operation buttons
  const handleOperation = (operation) => {
    const num = parseFloat(inputValue);
    if (isNaN(num)) return;

    switch (operation) {
      case 'add':
        setTotal(total + num);
        break;
      case 'subtract':
        setTotal(total - num);
        break;
      case 'multiply':
        setTotal(total * num);
        break;
      case 'divide':
        if (num === 0) {
          alert("Cannot divide by zero!");
          return;
        }
        setTotal(total / num);
        break;
      default:
        break;
    }
    setInputValue(''); // Clear input after operation
  };

  // Clear the input field
  const clearInput = () => {
    setInputValue('');
  };

  // Reset the total to 0
  const resetTotal = () => {
    setTotal(0);
    setInputValue(''); // Optionally clear the input as well
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="Enter a number" 
        />
      </div>
      <div>
        <p>Total: {total}</p>
      </div>
      <div>
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      <div>
        <button onClick={clearInput}>C</button>
        <button onClick={resetTotal}>Reset Total</button>
      </div>
    </div>
  );
};

export default App;
