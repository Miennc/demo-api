import Signup from "./signup/Signup";
import Login from './login/Login'
import Page1 from "./components/bai3/Page1"
import Page2 from "./components/bai3/Page2"
import Page3 from "./components/bai3/Page3"
import Form from './components/form/Form' 
import List from  './components/note/List';
import Add from './components/note/Add'
import Update from './components/note/Update'
import IncrementComponent from './components/smartComponents/IncrementComponent'
import DecrementComponent from './components/smartComponents/DecrementComponent'
import ShowNumberComponent from  './components/smartComponents/ShowNumberComponent'
import {
     BrowserRouter as Router,
     Switch,
     Route,
     useParams
   } from "react-router-dom";           
function App() {
     return (
        <Form></Form>

       //   <Router>
       //   <Switch>
       //     <Route exact path="/">
       //       <Page1></Page1>
       //     </Route>
       //     <Route path="/Page2">
       //      <Page2></Page2>
       //     </Route>
       //     <Route path="/Page3">
       //       <Page3></Page3>
       //     </Route>
       //   </Switch>
       // </Router>
      //  <Router>
      //    <Switch>
      //      <Route path="/" exact>
      //        <Signup></Signup>
      //      </Route>
      //      <Route path="/login" exact>
      //        <Login></Login>
      //      </Route>
      //    </Switch>
      //  </Router>

       //  <Router>
       //    <Switch>
       //      <Route exact path="/" >
       //          <List></List>
       //      </Route>
       //      <Route path="/add" >
       //         <Add></Add>
       //      </Route>
       //      <Route path="/update">
       //        <Update></Update>
       //      </Route>
       //    </Switch>
       //  </Router>
      //  <div>
      //  {/* <IncrementComponent></IncrementComponent>
      // <ShowNumberComponent></ShowNumberComponent>
      // <DecrementComponent></DecrementComponent> */}
      
      //  </div>
     );
}
export default App;
