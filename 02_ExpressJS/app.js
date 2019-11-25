express = require('express')
app = express()

app.set('port', 3000)

app.get('/', function (req, res) {
    res.send('hey please put a name on params')
})

app.get('/:name', 
    (req, res) => res.render('hello.ejs', {name: req.params.name})
)

app.set('views', __dirname + "/view")
app.set('view engine', 'ejs');
  
app.listen(
    app.get('port'), 
    () => console.log(`server listening on ${app.get('port')}`)
)