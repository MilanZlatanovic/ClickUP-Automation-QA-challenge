Lodgify Junior Automation QA Challenge

Overview
This repository contains my solution for the Lodgify Junior Automation QA Challenge.

To get started you should:
1. Clone the repository
2. Install dependecies

!!!IMPORTANT!!!
3. Change the fixture file
In order to run tests with your own account you will need to change the testdata.js file in the fixtures folder. 
It looks like this:
{
    "userdata": {
        "email": "input your email here",
        "password": "input your clickup pass here",
        "teamid": "xxxxxxxxxxx",
        "apikey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "baseApiUrl": "https://api.clickup.com/api/v2" //this will stay the same
    }
}

For your teamid and apikey check out the ClickUp API documentation: 
- Official website : https://clickup.com/
- API reference documentation: https://clickup.com/api/
- API Token: https://clickup.com/api/developer-portal/authentication#personal-token

  Upon changing the testdata.js file with appropriate data, just run the tests as usual, using npx cypress open command.

  Note that I didn't have enough time to implement delete space function everywhere, so at places where it is not present in the test, you shold delete
   the created space manually on the website in order to rerun the tests.

  
