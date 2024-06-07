import CoreConcept from './components/CoreConcept.jsx';
import Examples from './components/Examples.jsx';
import Header from './components/Header.jsx'

const random = ["Fundamental", "Crucial", "Absolute"];


export default function App() {


    return (
        <div>
            <Header/>
        
            <CoreConcept />
            <Examples/>
            
        </div>
    );
}
