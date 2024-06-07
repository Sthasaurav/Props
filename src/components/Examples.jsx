import React, { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButtons from './TabButtons.jsx';


export default function Examples(){

    const [selectedButton, setSelectedButton] = useState('components');

    function handleButtonClick(selectButton) {
        setSelectedButton(selectButton);
        console.log(selectButton);
    }
    return(
        <> <main>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButtons isSelected={selectedButton === "components"} onSelect={() => handleButtonClick("components")}>Components</TabButtons>
                <TabButtons isSelected={selectedButton === "props"} onSelect={() => handleButtonClick("props")}>Props</TabButtons>
                <TabButtons isSelected={selectedButton === "jsx"} onSelect={() => handleButtonClick("jsx")}>JSX</TabButtons>
                <TabButtons isSelected={selectedButton === "state"} onSelect={() => handleButtonClick("state")}>State</TabButtons>
            </menu>
            {selectedButton && (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedButton].title}</h3>
                    <p>{EXAMPLES[selectedButton].description}</p>
                    <code>{EXAMPLES[selectedButton].code}</code>
                </div>
            )}
        </section>
    </main>
    <main>
        <h2>Time to get started!</h2>
    </main>
</>
          )
}