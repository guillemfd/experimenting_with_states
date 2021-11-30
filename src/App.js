
import { useState } from 'react'; //la función que nos permite crear un estado en React. Siempre nos devuelve un array, el estado + la función.

import './App.css';

//Components
import Animal from './Animal'


function App() {
  //Como argumento del useState() vamos a pasarle el valor que queremos que mi estado tenga por defecto cuando lo creamos

  // const myFirstState = useState(0) //si pongo paella, {actualState} sería paella
  // const actualState = myFirstState[0] //estado
  // const setActualState = myFirstState[1] //función

  const [counter, setCounter] = useState(0)  //esto hace lo mismo que las 3 líneas anteriores, pero desestructurado
  const [valueFromInput, setValueFromInput] = useState('')
  const [animals, setAnimals] = useState(['cat', 'jaguar', 'bat', 'eagle', 'horse'])

  const deleteAnimal = (animalFromChild) => {
    const filteredAnimals = animals.filter((item) => {
      return item !== animalFromChild;
    });
    setAnimals(filteredAnimals);
  };


  return (
    <div className="App">
      <h1>Nueva app</h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter -1)}>RESTAR 1</button>
      <button onClick={() => setCounter(counter +1)}>SUMAR 1</button>
      <div>
      {/* <input type="text" onChange={(event)=>console.log(event.target.value)}/> */}
      <input type="text" onChange={(event)=> setValueFromInput(event.target.value)}/>
        <h2>What I am typing {valueFromInput}</h2>
      </div>
      <div className="flex-space">
        {animals.map((animal, index) => {
          return (
            <Animal
              animal={animal}
              key={index + Date.now()} //hay que poner el "key={index}" para evitar errores, no sirve para nada (por ahora). Date now da la fecha actual en ms dsd no se q año
              deleteAnimal={deleteAnimal}
            />
          );
        })}
      </div>
    </div>


  );
}

export default App;

//A TENER EN CUENTA

//Siempre que cambia el estado en React, el componente se re-renderiza.
//El estado en React es inmutable. SIEMPRE que queramos "cambiar" (sustituir) el estado, hay que utilizar la función que nos da useState()[1]. Esta función nos la da React para cambiar ese estado en específico.