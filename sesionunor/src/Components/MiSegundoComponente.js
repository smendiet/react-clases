import MiTercerComponente from "./MiTercerComponente";

function MiSegundoComponente() {
  return (
    <div>
      Mi segundo componente
      <MiTercerComponente />
    </div>
  );
}

export default MiSegundoComponente;