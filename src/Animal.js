//AIXÍ ES PER AFEGIR EL BOTÓ DE BORRAR

import './Animal.css'

const Animal = (props)=>{

  const { animal, deleteAnimal } = props

  return(
    <div className="Animal">
      <h3>{animal}</h3>
      <button onClick={()=>deleteAnimal(animal)}>BORRAR</button>
    </div>
  )
}

export default Animal




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