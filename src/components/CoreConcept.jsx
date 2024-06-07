import React from 'react';
import { CORE_CONCEPTS } from '../data.js';
import CoreConcepts from './CoreConcepts.jsx';

export default function CoreConcept() {
    return (
        <section id="core-concepts">
            <h2>Core Concept</h2>
            <ul>
                
                {CORE_CONCEPTS.map((conceptItem, index) => (
                    <CoreConcepts key={index} {...conceptItem} />
                ))}
            </ul>
        </section>
    );
}


// import { CORE_CONCEPTS } from '../data.js';
// import CoreConcepts from './components/CoreConcepts.jsx';


// export default function CoreConcept(){

//     return(
//         <section id="core-concepts">
//         <h2>Core Concept</h2>
//         <ul>
//           <ul>
//             {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts {...conceptItem} />))}
//           </ul>
//           {/* <CoreConcepts
//             title={CORE_CONCEPTS[0].title}
//             description={CORE_CONCEPTS[0].description}
//             image={CORE_CONCEPTS[0].image}
//           />
//           <CoreConcepts
//             title={CORE_CONCEPTS[1].title}
//             description={CORE_CONCEPTS[1].description}
//             image={CORE_CONCEPTS[1].image}
//           />
//           <CoreConcepts
//             title={CORE_CONCEPTS[2].title}
//             description={CORE_CONCEPTS[2].description}
//             image={CORE_CONCEPTS[2].image}
//           />
//           <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
//         </ul>
//       </section>
//     )
// }