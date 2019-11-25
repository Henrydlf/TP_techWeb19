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
    if (path === '/hello' && 'name' in params) {
        res.write('Hello ' + params['name'])
    } else {
        res.write('Hello anonymous')
    }
    console.log(params);
    res.end();
}

const server = http.createServer(serverHandle);
server.listen(3000); // start he server