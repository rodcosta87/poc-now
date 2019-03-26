const port = process.env.PORT || 3000

var express = require("express");
var app = express();
// Retrieve the raw body as a buffer and match all content types:
app.use(require('body-parser').raw({type: '*/*'}));


app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready On Server http://localhost:${port}`)
});


app.post('/webhook', function(request, response) {
  // Retrieve the request's body and parse it as JSON
  const event_json = JSON.parse(request.body);

  /* Do something with event_json */

  // Return a response to acknowledge receipt of the event
  response.status(200).send(event_json);
});