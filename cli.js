var addonsBox = require('./')
var fs = require('fs')
var http = require('http')
var ip = require('ip')

var addons = process.env.ADDONS || process.argv[1]
try {
    if (fs.existsSync(addons)) addons = JSON.parse(fs.readFileSync(addons).toString())  
    else addons = JSON.parse(addons)
} catch(e) { console.error(e) }

var port = process.env.PORT || 8080

addonsBox(addons, function(err, router, ids) {
    http.Server(function(req, res) {
        router(req, res, function() {
            res.writeHead(404)
            res.end('not found')
        })
    }).listen(port).on('listening', function() {
        console.log('\n\n\n')

        var addr = ip.address()
        ids.forEach(function(id) {
            console.log('http://'+addr+':'+port+'/addons/'+id+'/stremioget/stremio/v1')
        })
    })
})
