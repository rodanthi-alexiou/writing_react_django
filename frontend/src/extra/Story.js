import React from 'react'
import { Button, Typography, Grid } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
  } from "react-router-dom";

function Story(props) {
    return (
        <div>
        <h1>This is a Story!</h1>
        <Button variant="contained" color="#8FBC8F" component={Link} to={'/'}>
        Back
    </Button>
        </div>
        
    );
  }
  
  export default Story;