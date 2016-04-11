# stremio-addons-box
HTTP server that hosts any stremio add-ons you list


## Usage

```bash
npm install stremio-addons-box
stremio-addons-box '{ "stremio-vodo": "*", "stremio-filmon": "*" }' # same format as dependencies in package.json; alternatively path to json

# open browser at http://localhost:8080/stremio-vodo/stremio/v1 for vodo add-on
# open browser at http://localhost:8080/stremio-filmon/stremio/v1 for filmon
```