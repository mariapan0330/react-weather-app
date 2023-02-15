import Landing from "./components/Landing.jsx"
import QuickSearch from "./components/QuickSearch.jsx"
import './App.css'
import { HashLink } from 'react-router-hash-link';


function App() {

    

    const onSubmit = (msg) => {
        console.log("You submitted:", msg)
    }

    return (
        <>
        <div className="container my-container homepage">
            <Landing onSubmit={onSubmit}/>
        </div>
        </>
    );
}

export default App;
