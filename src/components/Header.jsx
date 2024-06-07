
import reactcoreImg from '../assets/react-core-concepts.png';
const random = ["Fundamental", "Crucial", "Absolute"];

function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
}
export default function Header() {


    const randomm = random[getRandom(2)];

    return (
        <>
            <header>
                <img src={reactcoreImg} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    {randomm} React concepts you will need for almost any app you are going to build!
                </p>
            </header>
        </>
    )

}
