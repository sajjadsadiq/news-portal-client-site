import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { TopBar } from "./components/TopBar/TopBar";
import { Settings } from "./Pages/Settings/Settings";
// import { Single } from "./Pages/Single/Single";
import { Write } from "./Pages/Write/Write";



function App() {
  return (
    <>
      <Router>
          <Route>
            <TopBar/>
          </Route>
        <Switch>
          <Route path="/write">
            <Write/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
