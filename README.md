#gulp-svn
[![NPM version](https://badge.fury.io/js/gulp-svn.png)](http://badge.fury.io/js/gulp-svn)
<table>
<tr>
<td>Package</td><td>gulp-svn</td>
</tr>
<tr>
<td>Description</td>
<td>SVN plugin for Gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.11.12</td>
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
var gulp = require('gulp')
var svn = require('gulp-svn')

// Run svn add
gulp.task('add', () => {
    return svn.add('/file.js')
}

// Run svn add with error
gulp.task('add', () => {
    return svn.add('./file.js', (err) => {
        if(err) throw err
    })
})

// Run svn add with options
gulp.task('add', () => {
    return svn.add('./file.js', {args: '--force'}, (err) => {
        if(err) throw err
    })
})

// Run svn revert some file
gulp.task('revert-file', () => {
    return svn.revert('somefile.js', (err) => {
        if(err) throw err
    })
})

// Run svn revert with some directory recursively
gulp.task('revert', () => {
    return svn.revert('directory', { args: '-R' }, (err) => {
        if(err) throw err
    })
})

// Run svn commit
gulp.task('commit', () => {
    return svn.commit('Initial commit', (err) => {
        if(err) throw err
    })
})

// Run svn tag
gulp.task('tag', () => {
    svn.tag('version-0.0.1', 'Tagged commit', (err) => {
        if(err) {
            throw err
        }
    })
})

// Run gulp
gulp.task('default',['add', 'commit'])
```

Synchronous tasks are also available, suffixed with 'Sync'. For instance use the task name, `moveSync` instead of `move`.