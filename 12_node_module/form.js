
function form(req, resp) {
    resp.writeHead(200,{"content-type":"text/html"})
    resp.write(`
    <form action="/submit" method="post">
        <input type="text" placeholder="enter your name" name="name" />
        <input type="text" placeholder="enter your email" name="email" />
        <button>Submit</button>
    </form>
    `)
}

module.exports= form;