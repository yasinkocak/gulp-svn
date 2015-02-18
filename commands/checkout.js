'use strict';

var exec = require('child_process').exec;

module.exports = function (repo, path, options, cb)
{
    if(!cb && typeof options === 'function') {
        cb = options;
        options = {};
    }

    if(!cb || typeof cb !== 'function') cb = function() {};
    if(!options) options = {};
    if(!repo) throw new Error('gulp-svn: Repository is required svn.checkout("https://svn.example.com/something/")');
    if(!options.args) options.args = ' ';
    if(!path) path = process.cwd();

    var cmd = 'svn checkout ' + repo + ' ' + path + ' ' + options.args;

    if(options.username && options.password) {
        cmd += ' --username '+ options.username + ' --password ' + options.password;
    }

    exec(cmd, function(err) {
        if(err) return cb(err);
        cb(null);
    });
};