'use strict';

var exec = require('child_process').exec,
    svnProjectRoot = require('svn-project-root');

module.exports = function(tag, message, options, cb) {
    if (!cb && typeof options === 'function') {
        cb = options;
        options = {};
    }

    if(!cb || typeof cb !== 'function') cb = function() {};
    if(!options) options = {};
    if(!tag) return cb(new Error('Tag must be defined'));
    if(!message) return cb(new Error('Message must be defined'));
    if(!options.cwd) options.cwd = process.cwd();
    if(!options.args) options.args = ' ';

    var projectRoot;
    if(options.projectRoot) {
        projectRoot = options.projectRoot;
    } else {
        try {
            projectRoot = svnProjectRoot.sync();
        } catch(err) {
            return cb(err);
        }
    }

    var from = projectRoot = projectRoot.replace(/\/$/, '');
    var to = projectRoot + '/tags/' + tag;

    var cmd = 'svn cp ' + from + ' ' + to + ' -m "' + message + '" ' + options.args;

    if(options.username && options.password) {
        cmd += ' --username '+ options.username + ' --password ' + options.password;
    }

    return exec(cmd, {cwd: options.cwd}, function(err, stdout, stderr){
        if (err) return cb(err);
        if (!options.quiet) gutil.log(stdout, stderr);
        cb();
    });
};