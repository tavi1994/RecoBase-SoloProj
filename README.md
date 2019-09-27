# Solo Project - Recordbase

[RecoBase website](http://34.89.0.182)

## Index
[Brief](#brief)
* [Solution](#solution)
   
[Architecture](#architecture)
* [Entity Relationship Diagrams](#erd)
	
[Testing](#testing)

[Deployment](#depl)
* [Technologies Used](#tech)
     
[Front End Design](#FE)

[Improvements for the Future](#improve)

[Authors](#auth)

[Acknowledgements](#ack)

<a name="brief"></a>
## The Brief

The objective was to create an object oriented web application that covers all the core topics and utilises the various tools covered during the training.

<a name="solution"></a>
### Solution
My project involved creating a user friendly website that would allow the users to store their personal record collection information online, and check other users collections as well. Users would be able to add, update and delete records from their personal collection and also check different record prices and compare them.

<a name="architecture"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagrams
#### Initial plan
![Initial ERD](/Captures/ER.PNG)

The entity relationship diagram from above reveals my initial plan for implementing the tables. Each user would have access to one collection which holds multiple records. The idea was to also have a register page for the user to create a new account and create a collection to store their records.

#### Delivered solution
![Final ERD](/Captures/ERD.PNG)

The delivered solution contains a table that holds all records along with their details. Future updates will implement the initial plan.


<a name="testing"></a>
## Testing

Testing of the project consisted of Mockito for the API, Selenium Tests for the front end website and Codacy was used to check
the quality of the code. The code coverage for the API can be found [here](Captures/testCoverage.png) and [here](Documentation/tests.png).

*   [Github repository for Selenium Tests](https://github.com/tavi1994/seleniumtestingWorking)
<a name="depl"></a>
## Deployment
![CI](/Captures/CIP.PNG)

The building and deployment process was automated using Jenkins which is set up to run on Google Cloud Platform virtual machine. Both the backend and front end are stored in a Docker container that is being build through Jenkins Execute Shell Commands. Screenshots of the jenkins build can be found [here](/Captures/jenkinsBuildsPNG.PNG) and [here](/Captures/jenkinsSSH.PNG). 
<a name="tech"></a>
### Technologies Used

*   H2 Database Engine - Database
*   Java - API Logic
*   JavaScript - Front End Logic
*   Draw.io - Wireframes and ERDs
*   HTML, CSS, Bootstrap Studio - Front End Design
*   Postman - API call tests
*   Apache2 - Deployment
*   Jenkins - CI Server
*   Maven - Dependency Management
*   [Git](https://github.com/tavi1994/RecoBase-SoloProj) - VCS
*   Trello - Project Tracking
*   GCP - Live Environment
*   Docker

<a name="FE"></a>
## Front End Design
### Wireframes

![Roster Wireframe](/Captures/wireframe.PNG)

### Final Version 

![Final Front End Design](/Captures/webpage.PNG)



<a name="improve"></a>
## Future improvements

Future improvements aim to achieve the following:

* Add a new database table for users so that they can register and login.

* Add a new html page that displays all records stored on the website.

* Add more design elements to the website without affecting usability

* Add picture to each record so they can be more visible and easy to identify.

* Add a search function that allows users to search for records.

<a name="auth"></a>
## Author

Mihai Octavian Cernat

<a name="ack"></a>
## Acknowledgements

*   QA consulting and our fantastic instructors with special thanks to Christopher Perrins
