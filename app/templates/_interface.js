var exec = require('cordova/exec');
var Plugin = function() {};

Plugin.prototype.bang = function(args, onSuccess, onError) {
    return exec(onSuccess, onError, '<%= serviceName %>', 'sampleAction', [args]);
}

module.exports = new Plugin();