// import module
const http = require('http');
const url = require('url')
const qs = require('querystring')

const serverHandle = function (req, res) {
    // Retrieve and print the queryParams
    const route = url.parse(req.url);
    const path = route.pathname;
    const params = qs.parse(route.query);

    res.writeHead(200, {'Content-Type': 'text/html'});
    if (path === '/hello' && 'name' in params && params['name']==='Pm') {
        res.write('Hello ' + params['name'])
        res.write('Pm is an engineer student at ECE Paris. He is in 4th years. He used to work with Henry and he likes pumpkin.')
    } else {
       res.status(404).send('Not Found');
    }
    console.log(params);
    res.end();
}

const server = http.createServer(serverHandle);
server.listen(3000); // start he server