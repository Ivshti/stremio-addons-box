# stremio-addons-box
HTTP server that hosts any stremio add-ons you list


## Usage

```bash
npm install stremio-addons-box
stremio-addons-box '[ "stremio-vodo", "addon-helloworld" ]' # array of strings passed to npm install; alternatively path to json

# open browser at http://localhost:8080/stremio-vodo/stremioget/stremio/v1 for vodo add-on
# open browser at http://localhost:8080/stremio-filmon/stremioget/stremio/v1 for filmon
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