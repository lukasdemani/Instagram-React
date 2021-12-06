import ReactDOM from "react-dom";

import Navbar from "./components/Navbar";
import Corpo from "./components/Corpo";
import Fundomobile from "./components/Fundomobile";

function App(){
    return (
        <div>
            <Navbar/>
            <Corpo/>
            <Fundomobile/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));