/* Importera */
var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');

// anslut till databas via mongoose
//mongoose.connect("mongodb://localhost:27017/courses", { useNewUrlParser: true, useUnifiedTopology: true });

// Skapa instans av express
var app = express();

//Middleware. Gör webbtjänsterna tillgängliga även från andra domäner
app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
	next();
});

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false}));
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Hantera för produktion
if(process.env.NODE_ENV === 'production'){
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

}

const port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log("Servern är startad på port " + port);
});