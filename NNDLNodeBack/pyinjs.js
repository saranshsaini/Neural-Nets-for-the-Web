var util = require("util");

var spawn = require("child_process").spawn;
var process = spawn('python',["./pyjs.py"]);



process.stdout.on('data',function(chunk){

    var textChunk = chunk.toString('utf8');// buffer to string

//    util.log(textChunk);
    console.log(textChunk);
});