import PropTypes from 'prop-types';

const Boton = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  );
}

Boton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
}

export default Boton;