var fs = require('fs');
var path = require('path');

var source = path.resolve('styles/refined.css');
var dest = path.join(process.env.HOME, '/Library/Application Support/Flowdock/userstyle.css');

console.log(source, '->' , dest);

try {
    var destStat = fs.lstatSync(dest);
    if (destStat.isFile()){
        fs.renameSync(dest, dest + '.bak');
    }

    if (destStat.isSymbolicLink()){
        fs.unlinkSync(dest, dest + '.bak');
    }


} catch (err) {
}

try {
    fs.symlinkSync(source, dest);
} catch (err) {
    console.log('Do you even have Flowdock installed?');
}

console.log('Install complete, refresh the FLowdock app with Command-R.');