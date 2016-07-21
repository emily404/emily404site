var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));

// ???? need this
app.get('/', function(request, response) {
  response.render('public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('emily404 site is running on port', app.get('port'));
});

