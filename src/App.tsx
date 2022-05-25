import './App.css';
import PlanetListComponent from './components/PlanetList'
import PlanetDetailComponent from './components/PlanetDetail'
import PlanetDetailWrapperComponent from './components/PlanetDetailWrapper'
import RootStore from './store/RootStore'

import {
  Outlet,
  Link,
} from "react-router-dom";

function App() {
  document.onkeydown = function (e) {
    switch (e.key) {
      case "Enter":
        //console.log("test");
        break;
    }
  };

  return (
    <div className="App">
      <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="planets">Planets</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;