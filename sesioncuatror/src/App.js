import logo from './logo.svg';
import './App.css';
import ContadorHooks from './components/Contador'
import FormularioEscuela from './components/Formulario/Form';
import FormularioPersona from './components/Formulario/Form2';

function App() {
  return (
    <div className="App">
      Reto
      {/*<FormularioEscuela />
      <ContadorHooks />*/}
      <FormularioPersona />
    </div>
  );
}

export default App;
