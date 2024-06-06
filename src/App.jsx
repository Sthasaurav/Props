import React, { useState } from 'react';
import jsx from './assets/jsx-ui.png';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButtons from './components/TabButtons.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data';

const random = ["Fundamental", "Crucial", "Absolute"];

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [selectedButton, setSelectedButton] = useState('components');
  const randomm = random[getRandom(2)];

  function handleButtonClick(selectButton) {
    setSelectedButton(selectButton);
    console.log(selectButton);
  }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {randomm} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <ul>
              {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts {...conceptItem} />))}
            </ul>
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons isSelected={selectedButton === "components"} onSelect={() => handleButtonClick("components")}>Components</TabButtons>
            <TabButtons isSelected={selectedButton === "props"} onSelect={() => handleButtonClick("props")}>Props</TabButtons>
            <TabButtons isSelected={selectedButton === "jsx"} onSelect={() => handleButtonClick("jsx")}>JSX</TabButtons>
            <TabButtons isSelected={selectedButton === "state"} onSelect={() => handleButtonClick("state")}>State</TabButtons>
          </menu>
          {/* {!selectedButton && <p>Please select</p> } */}
          {selectedButton && (<div id="tab-content">
            <h3>{EXAMPLES[selectedButton].title}</h3>
            <p>{EXAMPLES[selectedButton].description}</p>
            <code>{EXAMPLES[selectedButton].code}</code>

          </div>)}


        </section>
      </main>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
