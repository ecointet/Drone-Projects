var App = require('app'),
    app = new App();

app.routes({'': function (req, res, next){
  res.send('Hello World');
});

app.listen();