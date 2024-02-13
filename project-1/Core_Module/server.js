var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {
    if (req.url == '/product') {
        fs.readFile('product.txt', 'utf-8', function (err, data) {
            res.end(data)
        })
    }
    else {
        res.end('File is not found')
    }
}).listen(8000)