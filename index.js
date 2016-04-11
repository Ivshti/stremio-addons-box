var npm = require('npm')
var Router = require('router');

module.exports = function addonBox(addons, cb) {
    npm.load({ }, function() {
        npm.commands.install(addons, function(err, data) {
            if (err) return cb(err)

            var installed = data.slice(-addons.length) // bit of a hack, but always owrks with that version of npm
            var router = Router()
            var ids = []

            try {
                installed.forEach(function(i) {
                    var addon = require(i[1])
                    var name = i[0].split('@')[0]

                    if (! addon) throw new Error('unable to require '+i[0]+': returns falsy value')
                    if (! addon.middleware) throw new Error('unable to require '+i[0]+': does not return middleware')

                    router.all(new RegExp('\/addons\/'+addon.manifest.id+'\/.*'), addon.middleware)
                    router.all(new RegExp('\/addons\/'+name+'\/.*'), addon.middleware)

                    ids.push(addon.manifest.id)
                })
            } catch(e) { return cb(e) }

            cb(null, router, ids)
        })
    })
}