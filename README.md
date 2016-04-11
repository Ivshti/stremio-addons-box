# stremio-addons-box
HTTP server that hosts any stremio add-ons you list


## Usage

```bash
npm install stremio-addons-box
stremio-addons-box '[ "stremio-vodo", "addon-helloworld" ]' # array of strings passed to npm install; alternatively path to json

# open browser at http://localhost:8080/stremio-vodo/stremio/v1 for vodo add-on
# open browser at http://localhost:8080/stremio-filmon/stremio/v1 for filmon
```