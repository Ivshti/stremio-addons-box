var npm = require('npm')
var express = require('express')

module.exports = function addonBox(addons, cb) {
    npm.load({ }, function() {
        npm.commands.install(addons, function(err, data) {
            if (err) return cb(err)

            var installed = data.slice(-addons.length) // bit of a hack, but always owrks with that version of npm
            console.log(installed)
        })
    })
}