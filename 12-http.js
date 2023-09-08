const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our short hystory')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Page Not found.</p>
    <a href="/">Back Home</a>
    `)
}
)

server.listen(5000)

