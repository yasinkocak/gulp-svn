'use strict';

var exec = require('child_process').exec,
    gutil = require('gulp-util');

module.exports = function (options, cb) {

    if(!cb && typeof options === 'function') {
        cb = options;
        options = {};
    }

    if(!cb || typeof cb !== 'function') cb = function () {};
    if(!options) options = {};
    if(!options.log) options.log = !cb;
    if(!options.cwd) options.cwd = process.cwd();
    if(!options.args) options.args = ' ';

    var cmd = 'svn ' + opt.args;

    if(options.username && options.password) {
        cmd += ' --username '+ options.username + ' --password ' + options.password;
    }

    return exec(cmd, {cwd: options.cwd}, function(err, stdout, stderr){
        if(err) return cb(err);
        if(options.log && !options.quiet) gutil.log(cmd+ '\n' + stdout, stderr);
        else {
            if(!options.quiet) gutil.log(cmd + ' (log : false)', stderr);
        }
        cb(err, stdout);
    });
};