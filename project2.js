var fs = require('fs');
fs.writeFile("cs142-make-multi-filter.js", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 