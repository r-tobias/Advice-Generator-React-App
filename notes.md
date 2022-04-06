start with container to organize
add boiler plate
import browser router from react-router dom in index.js
wrap it around app
go back to header
import nav link from router
link each navlink to whatever route
go to app.js to do organization
import header and add main
import container, footer place inside main
run npm start
all the finished components will be in app.js
we're missing rendering so we go to container to do the rendering
import route and routes
container is where it's going to be linked to the components
start with random component, go to advice slip json api
https://api.adviceslip.com/
make an axios call inside services/constants
go to random and import that function
wrap it in braces cus it's an object
since we're dealing with api calls, we need to save it to a state
since we only want one random one, so we can set it as ""
now let's bring in the api call
we want to call the api so lets go to our return statement
new button should make an api call
use an onclick some kind of function that does the api call 
since it is a side effect, we have to use useeffect
console.log the api call so you know how to access the data
now you can render the state in the return statement 





