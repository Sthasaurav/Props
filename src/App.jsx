
import jsx from './assets/jsx-ui.png'

import { CORE_CONCEPTS } from './data'
const random = ["Fundamental", "Crucial", "Absolute",]

function getRandom(max) {

  return Math.floor(Math.random() * (max + 1));


}

function CoreConcepts(props) {
  return (
    <li>

      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  )

}

function App() {
  const randomm = random[getRandom(2)]
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomm} React concepts you will need for almost any app you are
          going to build!
        </p>
        <main>
          <section id="core-concepts" >
<h2>Core Concept</h2>
<ul>
<CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            
            
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />   <CoreConcepts
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
          />
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
</ul>
           


          </section>

        </main>



      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
