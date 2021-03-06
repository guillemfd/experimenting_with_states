//AIXÍ ES PER AFEGIR EL BOTÓ DE BORRAR


import './Animal.css'

const Animal = (props)=>{

  const { animal, deleteAnimal } = props

  const checkForAnimalType = ()=>{
    if(animal.canFly){
      return <p>Este animal puede volar</p>
    }
  }

  // let mainClass = `Animal ${animal.color}`

  // animal.canFly ? mainClass += " blue" : mainClass += " red"

  const properties = {backgroundColor : animal.color, color: 'white', padding: '5px'}

  return(
    <div class="Animal" style={properties}>
      <h3>{animal.type}</h3>
      {/* {animal.canFly && <p>Este animal puede volar</p>} */}
      {/* {checkForAnimalType()} */}
      { animal.canFly ? <p>Este animal puede volar</p> : <p>Animal terrestre</p> }
      <button onClick={()=>deleteAnimal(animal.type)}>BORRAR</button>
    </div>
  )
}

export default Animal



//---------------------- per canviar el color depenent si vola o no----
// let mainClass = "Animal"

// animal.canFly ? mainClass += " blue" : mainClass += " red"

// return(
//   <div className={mainClass}>
//----------------------------------------


//-----------------------------------------------------
// JAVASCRIPT: 
// if(animal.canFly){
//  return <p>Este animal puede volar</p>
// }

//JSX
// {animal.canFly && <p>Este animal puede volar</p>}





// JAVASCRIPT: 
// if(animal.canFly){
//  return <p>Este animal puede volar</p>
// } else {
// return <p>Animal terrestre</p>
// }

//recomendado para JSX dentro del return
// {animal.canFly ? <p>Este animal puede volar</p> : <p>Animal terrestre</p>}
//---------------------------------------------------------



//AIXÍ ERA XQ ES VEIÈSSIN LES CARD I JA ESTÀ
// import './Animal.css'

// const Animal = (props)=>{
//   return(
//     <div className="Animal">
//       <h3>{props.animal}</h3>
//     </div>
//   )
// }

// export default Animal


//----------------------------------------------------
