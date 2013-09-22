
// -- Global Settings
var settings = {
    'siteName'          : 'Arc Play',
    'sessionSecret'     : 'sessionSecret',
    'uri'               : 'http://local.host',
    'port'              : process.env.PORT || 3000,
    'debug'             : 0,
    'profile'           : 0
};

/**
 * Default configuration manager
 * Inject app and express reference
 */

module.exports = function(app, express, env) {

    // -- Development
    if ('development' == env) {
        require('./development')(app, express);
    }

    // -- Production
    if ('production' == env) {
        require('./production')(app, express);
    }

};

module.exports.settings = settings;