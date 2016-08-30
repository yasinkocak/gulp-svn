'use strict';

var exec = require('child_process').execSync,
    gutil = require('gulp-util');

module.exports = function (options, cb) {

    if(!cb && typeof options === 'function') {
        cb = options;
        options = {};
    }

    if(!cb || typeof cb !== 'function') cb = function() {};
    if(!options) options = {};
    if(!options.cwd) options.cwd = process.cwd();
    if(!options.args) options.args = ' ';

    var cmd = 'svn list ' + options.args;

    if(options.username && options.password) {
        cmd += ' --username '+ options.username + ' --password ' + options.password;
    }

    return exec(cmd, {cwd: options.cwd});
};