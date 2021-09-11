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
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { Single } from "./Pages/Single/Single";



function App() {
  const user = false;
  return (
    <>
      <Router>
          <Route>
            <TopBar/>
          </Route>
        <Switch>
          <Route path="/write">
            {user? <Write/>:<Register/>}
          </Route>
          <Route path="/settings">
            {user? <Settings/>:<Register/>}
          </Route>
          <Route path="/login">
            {user? <Home/>:<Login/>}
          </Route>
          <Route path="/register">
            {user? <Home/>:<Register/>}
          </Route>
          <Route path="/post/:postId">
            <Single/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router> 
    </>
  );
}

export default App;
