import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import PlanReact from './components/PlanReact';
import PlanRedux from './components/PlanRedux';
import SubtemaHook from './components/SubtemaHook';
import SubtemaRedux from './components/SubtemaRedux';
import { RUTAS } from "./helpers/constants";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path={RUTAS.planReact} component={PlanReact} />
        <Route exact path={`${RUTAS.planReact}/:subtema`} component={SubtemaHook} />
        <Route exact path={RUTAS.planRedux} component={PlanRedux} />
        <Route exact path={`${RUTAS.planRedux}/:subtema`} component={SubtemaRedux} />
      </div>
    </BrowserRouter>
  );
}

export default App;
