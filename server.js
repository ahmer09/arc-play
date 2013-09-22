// -- Module dependencies.
var express     = require('express'),
    http        = require('http'),
    logo        = require('./library/logo'),
    color       = require('colors'),
    moment      = require('moment');
bootstrap   = require('./bootstrap');

// -- Create Express instance and export
var app         = express(),
    env         = app.settings.env,

// -- Import configuration
    conf        = require('./settings/config'),
    settings    = conf.settings;
conf            (app, express, env);

// -- Bootstrap Config
bootstrap.boot(app);

// -- Routes
require('./controllers/default/route')(app);

// -- Only listen on $ node app.js
logo.print();

http.createServer(app).listen(settings.port, function() {
    console.log("Express server listening on " + " port %d ".bold.inverse.red + " in " + " %s mode ".bold.inverse.green + " //", settings.port, env);
});
