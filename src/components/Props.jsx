import '../styles/Props.css'
import PropTypes from 'prop-types'
export const Props = ({titulo, subtitulo,numero}) => {

    console.log(titulo)
    console.log(subtitulo)
  return (
    <>
        <h1>{titulo}</h1>
        <h1>{subtitulo}</h1>
        <h1>{numero+4}</h1>
    </>
  )
}

Props.propTypes = {
    titulo : PropTypes.string.isRequired,
    numero : PropTypes.number.isRequired
}

Props.defaultProps = {
    titulo: 'Curso de react',
    subtitulo: 'Seccion de props',
    numero : 100
}