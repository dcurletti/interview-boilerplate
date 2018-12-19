## Environment Setup
* Clone the repo locally `git clone git@github.com:dcurletti/interview-boilerplate.git`
* cd into the cloned directory `cd interview-boilerplate`
* Install the node dependencies `yarn`
* Start the application `yarn dev`

## Exercise Steps
* Add 3 buttons representing various "plan types" with labels/values of: 50, 200, 500
* Add a button "Next" that navigates the user to the path `/2`
* Add an input on path `/2` that captures a user's email address
* Add a button "Next" that navigates the user to the path `/3`
* On `componentDidMount` of path `/3`, invoke `services/apiCall` with the previously captured input values
* Wait for `services/apiCall` to return before displaying path `/3`
* If `services/apiCall` returns `false`, redirect to path `/2`

---
* How to decouple the navigation buttons from the individual paths
* How to decouple the navigation paths from the views

