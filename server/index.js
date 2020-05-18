const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const SERVER_PORT = 4000
const app = express()

//endpoints go here
app.get('/api/products/', getProducts)

app.get('/api/product/:id', getProduct)

//Here is the port that the server will listen on
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`)
});

//BELOW QUESTIONS YOU CAN ANSWER TO HELP YOU UNDERSTAND NODE.JS

//What is Node?
//    -Is a javascript framework that can be executed outside the browser

//What is the request-response cycle?
//    -The request-response cycle begins with a client sending a request message to a server. The server handles the request and sends a response message back to the client. An HTTP  message has a header and sometimes a body.

//What is the purpose of a server?
//    -recieves, stores and sends off information back to a client.

//What's the package.json for?
//    - The package.json stores the metaData (data that describes and gives information about other data) and is used for managing the porjects dependencies, scripts, version ect.

//What are node_modules?
//    - Determines what files will be installed when you run npm install.

//What is Express?
//    -Express is a framework from js that makes it great for building servers.

//What does the listen method do?
//    - The listen method creates a listener on the specified port or path. This makes it easy when working with servers ex: localhost:4000 (you would have the listner set up on port 4000).

//What are some common status codes and what do they mean?
//    -200, 404, 500

//What's the difference between npm install package-name and npm install -g package-name?
//    -global install does it for the entire computer while the npm install just does it in the project.

//When should I use a query vs. a param and vice-versa?
