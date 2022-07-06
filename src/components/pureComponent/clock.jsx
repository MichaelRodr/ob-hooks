import React,{useState, useEffect} from 'react'

  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Michael',
    apellido: 'Rodriguez'
  }
const Clock = () => {
  
    const [ datos , setDatos] = useState(initialState)


  
   function  incrementEdad(){
    const timeInterval = setInterval(() => {
       setDatos(datos.edad + 1 )
       setDatos(datos.fecha)
    } , 1000)
    return timeInterval
   }
   
   
    
   
  useEffect(() => {
      console.log('Montage del componente')
      
  return () => {
     clearInterval(incrementEdad);
  }
    
  },[datos]);
  

       

  return (
    <div>
      <h2>
        Hora Actual: {datos.fecha.toLocaleTimeString() }
      </h2>
      <h3>
        {datos.nombre} {datos.apellido}
      </h3>
      <h3>
        Edad: {datos.edad}
      </h3>
    </div>
  )
}

export default Clock;