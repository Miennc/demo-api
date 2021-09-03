import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Message from "./message/Message";
import Signup from "./signup/Signup";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
         <Signup></Signup>
        </Route>
        <Route path="/message" exact>
          <Message></Message>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
