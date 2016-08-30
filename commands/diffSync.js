'use strict';

var exec = require('child_process').execSync,
    gutil = require('gulp-util');

module.exports = function (file, options, cb) {

    if(!cb && typeof options === 'function') {
        cb = options;
        options = {};
    }

    if(!cb || typeof cb !== 'function') cb = function() {};
    if(!options) options = {};
    if(!file) throw new Error('gulp-svn: File is required svn.diff("file.js")');
    if(!options.cwd) options.cwd = process.cwd();
    if(!options.args) options.args = ' ';

    var cmd = 'svn diff ' + file + ' ' + options.args;

    if(options.username && options.password) {
        cmd += ' --username '+ options.username + ' --password ' + options.password;
    }

    return exec(cmd, {cwd: options.cwd});
};