express = require('express')
app = express()
path=require('path')

app.set('port', 3000)
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.send('hey please put a name on params')
})

app.get('/:name', 
    (req, res) => res.render('hello.ejs', {name: req.params.name})
)

app.listen(
    app.get('port'), 
    () => console.log(`server listening on ${app.get('port')}`)
)