import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import './layout.css';
  
  
  
  function Item() {
    return (
      <body>
  
                    <div class="topnav">
                    <a >Profile</a>
                    <a >Friends</a>
                    <a >Relax</a>
                  </div>
  
                    <div class="header">
                      <h1>Chaos in Order</h1>
                      <p>Trust or not the process</p>
                    </div>
  
  
  
  
                    
                    <div class="row">
                    <div class="leftcolumn">
                      <div class="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                      </div>
                      <div class="card">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                      </div>
                    </div>
                    <div class="rightcolumn">
                      <div class="card">
                        <h2>Name</h2>
                        <h5>Type of Art</h5>
                        <p>Description</p>
                      </div>
                      <div class="card">
                        <h3>Similar</h3>
                      </div>
                    </div>
                  </div>
  
                  <div class="footer">
                    <h2>Footer</h2>
                  </div>
                  </body>
                  
                
  
    );
  }
  
  export default Item;
  