'use strict';

var exec = require('child_process').exec,
    gutil = require('gulp-util');

module.exports = function (repo, path, options, cb)
{
    if(!cb && typeof options === 'function') {
        cb = options;
        options = {};
    }

    if(!cb || typeof cb !== 'function') cb = function() {};
    if(!options) options = {};
    if(!repo) throw new Error('gulp-svn: repo is required');
    if(!options.cwd) options.cwd = process.cwd();
    if(!options.args) options.args = ' ';

    var cmd = 'svn switch ' + repo + ' ' + path + ' ' + options.args;

    if(options.username && options.password) {
        cmd += ' --username '+ options.username + ' --password ' + options.password;
    }

    return exec(cmd, {cwd: options.cwd}, function(err, stdout, stderr){
        if (err) return cb(err);
        if (!options.quiet) gutil.log(stdout, stderr);
        cb();
    });
};