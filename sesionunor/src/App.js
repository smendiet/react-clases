import './App.css';
import Foco from './Components/Foco'
//import MiprimerComponente from './Components/MiprimerComponente';

function App() {
  return (
    <div>
    <div className="header">
      <Foco className="large-foco"/>
    </div>
    <div className="techo">
      <Foco className="foco"/>
      <Foco className="foco"/>
    </div>
    <div className="footer">
      <Foco className="large-foco"/>
    </div>
    </div>
  );
}

export default App;
