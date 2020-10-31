import './App.css';
import './Responsive.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

import MainHome from './Componants/MainHome/MainHome';
import Admin from './Componants/Admin/Admin';
import NotFound from './Componants/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <MainHome />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/blog">
            <Admin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
