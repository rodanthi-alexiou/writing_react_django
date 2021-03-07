import React from 'react'
import { Button, Typography, Grid } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
  } from "react-router-dom";

import Exc1 from "./Exc1"
import Exc2 from "./Exc2"
import Exc3 from "./Exc3"
import PinterestWidget from "./PinterestWidget"




function HomePage() {

    return (
        <Router>
        <Switch>
          <Route
            exact
            path="/" render={() => {
                return(
                  
                  <div className='text'>Ιστορία
                    <div className='app'>
                    <Button className='answer-section' component={Link} to={'/exc1'}>
                    ΚΟΜΜΑΤΑ
                    </Button>
                    <Button className='answer-section' component={Link} to={'/exc2'}>
                        ΠΡΟΣΦΥΓΙΚΟ ΖΉΤΗΜΑ- 19ος ΑΙΩΝΑΣ
                    </Button>
                    <Button className='answer-section' component={Link} to={'/exc3'}>
                        Εφόλης
                    </Button>
                    </div>
                </div>);
              }}/>


          <Route path="/exc1" component={Exc1}/>
          <Route path="/exc2" component={Exc2}/>
          <Route path="/exc3" component={Exc3}/>
          <Route path="/pinterest" component={PinterestWidget}/>
        </Switch>
      </Router>
        
    );
  }
  
  export default HomePage;