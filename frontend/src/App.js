import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './layout.css';
import Profile from "./Profile"
import Item from "./Item"
import Story from "./Story"
import CreateStory from "./CreateStory"
import Hobbys from "./Hobbys"




function App() {
  return (
                
                <Router>
                <Switch>
                  <Route
                    exact
                    path="/" render={() => {
                        return(
                          
                          <body>

                          <div class="topnav">
                          <a href="/profile">Portfolio</a>
                          <a href="/createstory">Blog</a>
                          <a href="/hobbys">Coffee Space</a>
                        </div>
        
                          <div class="header">
                            <h1>Portfolio</h1>
                            <p>Join the Journey</p>
                          </div>
        
                        </body>
                        );
                      }}/>
        
        
                  <Route path="/profile" component={Profile}/>
                  <Route path="/item" component={Item}/>
                  <Route path="/story" component={Story}/>
                  <Route path="/createstory" component={CreateStory}/>
                  <Route path="/hobbys" component={Hobbys}/>
                </Switch>
              </Router>
              

  );
}

export default App;
