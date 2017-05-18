'use strict';

var exec = require('child_process').execSync,
    gutil = require('gulp-util');

module.exports = function (path, options, cb) {

    if(!cb && typeof options === 'function') {
        cb = options;
        options = {};
    }

    if(!cb || typeof cb !== 'function') cb = function() {};
    if(!options) options = {};
    if(!path) throw new Error('gulp-svn: Path is required svn.revert("path") - directory or file');
    if(!options.cwd) options.cwd = process.cwd();
    if(!options.args) options.args = '';

    var cmd = 'svn revert ' + options.args + ' ' + path;

    if(options.username && options.password) {
        cmd += ' --username '+ options.username + ' --password ' + options.password;
    }

    return exec(cmd, {cwd: options.cwd});
};