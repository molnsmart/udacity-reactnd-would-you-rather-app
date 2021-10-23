# Would You Rather Project

This is the final assesment project for Udacitys React Nanodegree program. The project summaries all learning about
* React fundamentals
* Redux, manage state
* Declaritive user interface
* Enterprise-level apps

The application give you as a user simple questions to answer.
<br>"Would you rather, Option A or B"
<br>
<br>
Then you get different views about the history data.
* Which questions have you answered?
* What have other user answered on same Question?
* Leaderboard, who answered most questions? etc.

All in all the projects shows the ability to use Redux to solve stateChanges.

The course is not about Respnsiveness or webb design so the user interface is minimal and the app is not responsive today. Therefor run the application in desktop mode for best experience :)
<br>

## Start application
Run the project with npm installed on your machine.
* npm install
* npm start

application starts on https://localhost:3000

## Use the application
Application uses MOCK data and it is reset everytime you closes the application.

The signed in user is stored in Cookie. And will remain if application restarts.

### SignIn Page
go to https://localhost:3000
![SignIn page](/readme_files/signin.png)
<br>

### MainPage: <br>
View all questions in Application. In category (Unanswered/answered) <br>Select one "View Poll" to Answer or view question.
![SignIn page](/readme_files/mainPage.png)

*AnswerQuestion:* <br>If you poll a question and have not answered, then you get the option do that.
![answerQuestion](/readme_files/answerQuestion.png)
Select a user and sign in.

*AnswerResult:* <br>If you poll a question and have answered, you get a summary of others users answers.
![questionResult](/readme_files/questionResult.png)
Select a user and sign in.


*Leaderboard:* <br>To get a good overview of who answered most questions / created questions go to Leaderboard in top Navigation.

![leaderBoard](/readme_files/leaderboard.png)

## Data

There are two types of objects stored in MOCK database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |
