import React from "react"
import './App.css';

function App() {

  //using uncontrolled componenets(the stuff with the ref) , using thhis form data is hhandled by the DOM while controlled componenets(the normal way we collect form data with state is handled by the react componnet
  //In summary, the DOM is a foundational part of web development and represents the structure of web documents, while React components are a higher-level abstraction for building user interfaces that make it easier to manage and update the DOM in a declarative way. React is often used to create dynamic, interactive web applications by efficiently managing the DOM updates in response to user actions and application state changes.

  let name = React.createRef();
  let age = React.createRef();

  const submit=()=>{
    console.log(name.current.value)
    console.log(age.current.value);
  }
  return (
    <div className="App">
      <input type="text" placeholder='name' ref={name} />
      <input type="text" placeholder='age' ref={age} />
      <button onClick={submit}>click</button>
    </div>
  );
}

export default App;
