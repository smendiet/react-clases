import './App.css';
import AntiHeroBox from './components/AntiHeroeBox';
import Heroes from './components/Herobox';
import MujerMaravillaImage from './img/MujerMaravilla.jpg';
import SpiderMan from './img/SpiderMan.jpg';
import SuperMan from './img/Superman.jpg';
import Venom from './img/Venom.jpg';
import Deadpool from './img/Deadpool.png';

function App() {
  return (
    <div className="App">
      <Heroes className="Hero-Superman" name="Clark" heroName="Superman">
        <h2>Biografía de Superman</h2>
        <img src={SuperMan} alt="Superman" />
        <p>
          Superman es un superhéroe ficticio que apareció por primera vez en los cómics estadounidenses publicados por DC Comics. El personaje fue creado por el escritor estadounidense Jerry Siegel y el artista canadiense Joe Shuster en 1933 cuando ambos se encontraban viviendo en Cleveland, Ohio.
        </p>
        <a href="https://es.wikipedia.org/wiki/Superman">Superman</a>
      </Heroes>
      <Heroes className="Hero-Batman" name="Peter" heroName="El Hombre Araña">
        <h2>Biografía del Hombre Araña</h2>
        <img src={SpiderMan} alt="Hombre araña" />
        <p>
          Spider-Man, traducido en ocasiones como Hombre Araña,​ es un personaje creado por los estadounidenses Stan Lee y Steve Ditko,13​14​ e introducido en el cómic Amazing Fantasy n.° 15, publicado por Marvel Comics en agosto de 1962.15​ Se trata de un superhéroe que emplea sus habilidades sobrehumanas, reminiscentes de una araña, para combatir a otros supervillanos que persiguen fines siniestros.
        </p>
        <a href="https://es.wikipedia.org/wiki/Spider-Man">Hombre Araña</a>
      </Heroes>
      <Heroes className="Hero-Mujer-Maravilla" name="Diana" heroName="La Mujer Maravilla">
        <h2>Biografía de La Mujer maravilla</h2>
        <img src={MujerMaravillaImage} alt="Mujer Maravilla" />
        <p>
          La Mujer Maravilla es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega. En su tierra natal es conocida como la princesa Diana de Temiscira pero fuera de esta utiliza la identidad secreta de Diana Prince.
        </p>
        <a href="https://es.wikipedia.org/wiki/Mujer_Maravilla">Mujer Maravilla</a>
      </Heroes>

      <AntiHeroBox className="AntiHero-Venom" name="Eddie Brock" antiHero="Venom">
        <h2>Biografía de Venom</h2>
        <img src={Venom} alt="Venom" />
        <p>
          Venom es un antihéroe y supervillano que aparece en los cómics publicados por la editorial estadounidense Marvel Comics. El personaje es un extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano.
        </p>
        <a href="https://es.wikipedia.org/wiki/Venom_(Marvel)">Venom</a>
      </AntiHeroBox>

      <AntiHeroBox className="AntiHero-Deadpool" name="Deadpool" antiHero="Wade Winston Wilson">
        <h2>Biografía de Deadpool</h2>
        <img src={Deadpool} alt="Deadpool" />
        <p>
          Deadpool es un mercenario mentalmente inestable es famoso por su naturaleza comunicativa y por su tendencia a romper la cuarta pared, un recurso utilizado por los escritores para un efecto humorístico
        </p>
        <a href="https://es.wikipedia.org/wiki/Deadpool">Deadpool</a>
      </AntiHeroBox>
    </div>
  );
}

export default App;
