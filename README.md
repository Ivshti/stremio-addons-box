# stremio-addons-box
HTTP server that hosts any stremio add-ons you list

Helps you faciliate hosting of more than one stremio addon, as you just need to deploy this one module.

This will also support listing similar to [addons.strem.io](http://addons.strem.io), so you can build your own add-on stores.

## Usage

```bash
npm install stremio-addons-box
stremio-addons-box '[ "stremio-vodo", "addon-helloworld" ]' # array of strings passed to npm install; alternatively path to json

# open browser at http://localhost:8080/stremio-vodo/stremioget/stremio/v1 for vodo add-on
# open browser at http://localhost:8080/addon-helloworld/stremioget/stremio/v1 for hello world add-on
```


## Programatic

```javascript
var addonsBox = require('stremio-addons-box')
var http = require('http')

addonsBox(['stremio-vodo'], function(err, router, ids) {
    http.Server(router).listen(8080).on('listening', function() {
    	// open browser at http://localhost:8080/stremio-vodo/stremioget/stremio/v1 for vodo add-on
    })
})
```
