import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import './layout.css';

 
  


  
  
  function Profile() {


    return (
      <body>
  
                    <div class="topnav">
                    <a href="/">Home</a>
                    <a href="http://www.rodanthi-alexiou.com/" target="_blank">Blog</a>
                    <a >Relax</a>
                  </div>
  
                    <div class="header">
                    <h1>Portfolio</h1>
                    <p>Rodanthi Maria Alexiou</p>
                  </div>

            
                  <div class="leftcolumn"> 
                      <h1>Experience</h1>


                      <div class="card">
                      <div class="header">
                      
                        <h3>Microsoft Learn Student Ambassador</h3>
                        <h6>August 2020 - Ongoing</h6>
                        
                      </div>
                        
                      
                        <p>Organizing and participating in events about Microsoft Products(Power BI, VSCode, Healthbot etc), actively learning about them through Microsoft's tutorials and participating in monthly/weekly calls with other members of the program for team work purposes</p>
                        <p>Working with fellow Student Ambassadors and members of Microsoft's Healthbot team to create the Learn tutorial about the service</p>
                        <h4>Events:</h4>
                        <h5>Carnegie Mellon University Microsoft Learn Module</h5>
                        <p>The session discusses and demonstrate different quantitative measurements you should be using when tracking, reviewing and implementing. monitoring platforms and dives into the metrics that are important as you set your application up. </p>
                        <iframe
                        width="600"
                        height="280"
                        src={`https://www.youtube.com/embed/halEz9Z9PZ8`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                        
                        <h5>Manage your Spotify Data in VSCode and Power BI</h5>
                      </div>

                      <div class="card">

                      <div class="header">
                      <h3>General Organizer at Google Developers Student Club</h3>
                      <h6>September 2020 - Ongoing</h6>
                      </div>
                    
                      <p>Organizing social media promotion of club's events (hacakthons etc) and keeping an active status online for the club's brand</p>
                      <p>Team working with monthly/weekly calls to create marketing strategies for maximazing attendance in our club's event</p>
                    </div>

                    <div class="card">

                    <div class="header">
                    <h3>Operation Team at Mindspace NPO</h3>
                    <h6>January 2021 - Ongoing</h6>
                    </div>
                  
                    <p>Every month we organize meetups with successful entrepreneurs to inspire students from different academic backgrounds to create teams to pursue their dreams (startups etc)</p>
                    <p>Event organizing skills, Crisis Management, Business Tips from Entrepreneurs: https://www.mindspace.gr/</p>
                    <h4>Events:</h4>
                    <h5>Entrepreneurs expanding horizons Volume 1&2</h5>
                    <iframe
                        width="600"
                        height="280"
                        src={`https://www.youtube.com/embed/iV7r_keYmPw`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                    
                  </div>

                  <h1>Projects</h1>



                    </div>



                 



                  <div class="footer">
                  <h2>Footer</h2>
                </div>

               

              </body>
                  
                
  
    );
  }
  
  export default Profile;