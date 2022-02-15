const Herobox = ({name, heroName, className, children}) => {
  return (
    <div className={className}>
      <h1>Mi nombre es: {name} y yo soy {heroName}</h1>
      {children}
    </div>
  );
}

export default Herobox;