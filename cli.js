var addonsBox = require('./')
var fs = require('fs')

var addons = process.env.ADDONS || process.argv[1]
try {
	if (fs.existsSync(addons)) addons = JSON.parse(fs.readFileSync(addons).toString())	
	else addons = JSON.parse(addons)
} catch(e) { console.error(e) }

addonsBox(addons, function(err, res) {
	console.error(err)
	console.log("completed addons box")
})
