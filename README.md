#gulp-svn
[![NPM version](https://badge.fury.io/js/gulp-svn.png)](http://badge.fury.io/js/gulp-svn)
<table>
<tr>
<td>Package</td><td>gulp-svn</td>
</tr>
<tr>
<td>Description</td>
<td>SVN plugin for Gulp (gulpjs.com)</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage
### Install
    npm install gulp-svn --save

## Example
```javascript
var gulp = require('gulp');
var svn = require('gulp-svn');

// Run svn add
gulp.task('add', function(){
    return svn.add('/file.js');
}

// Run svn add with error
gulp.task('add', function(){
    return svn.add('./file.js', function(err){
        if(err) throw err;
    });
});

// Run svn add with options
gulp.task('add', function(){
    return svn.add('./file.js', {args: '--force'}, function(err){
        if(err) throw err;
    });
});

// Run svn commit
gulp.task('commit', function(){
    return svn.commit('Initial commit', function(err){
        if(err) throw err;
    });
});

// Run gulp
gulp.task('default',['add', 'commit']);
```