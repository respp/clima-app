//Creando el boton de forma externa
const Button = (props) => {
  return (
    <button onClick={props.onClick}>Soy un boton (externo)</button>
  )
}

////////////////////////////////
export const ButtonApp = ({}) => {
  function handleClick(e, arg){
    console.log('boton interno SIN prop')
    console.log(e)
    console.log(arg)
  }
  return (
    <>
      <h1>Contador: </h1>

      {/* Con boton externo */}
      <Button onClick={function () {
        console.log('boton externo CON prop')
      }}>
      </Button>

          {/* Con boton interno 2 argumentos */}
      <button onClick={(e) => handleClick (e, 'Otro Argumento')}>
        Soy un boton (interno)
      </button>
          {/* Con boton interno 1 argumentos */}
      <button onClick={handleClick}>
        1 argumento
      </button>

    </>
  )
}

//PD: El primer borton funciona con props, el segundo no
