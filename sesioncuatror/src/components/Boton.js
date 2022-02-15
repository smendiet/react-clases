import PropTypes from 'prop-types';

const Boton = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>
        {props.texto}
      </button>
    </>
  );
}

Boton.propTypes = {
  texto: PropTypes.string,
  handleClick: PropTypes.func
}

export default Boton;