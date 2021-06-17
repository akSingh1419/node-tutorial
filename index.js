const http = require('http')
const fs = require('fs')
const path = require('path')

const app = http.createServer((req, res) => {
    // console.log(req.url)

    const filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    const ext = path.extname(filepath)

    if(!ext) {
        filepath += '.html'
    }

    console.log(filepath)

    let contentType = null

     switch(ext) {
        case '.css': 
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/js'
            break
        default:
            contentType = 'text/html'
    }

    fs.readFile(filepath, (err, data) => {
        if(err) {
            res.writeHead(500)
            res.end('Something went wrong')
        }
        res.writeHead(200, {
            'Content-type': contentType
        })
        res.end(data);
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server started successfully')
})