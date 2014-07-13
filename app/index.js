'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var CordovapluginGenerator = yeoman.generators.Base.extend({
    promptUser: function() {
        var done = this.async();
        
        console.log(this.yeoman);
        
        var prompts = [
            {
                name: 'author',
                message: 'Who are you?'
            },
            {
                name: 'pluginName',
                message: 'What is the plugin\'s name?'
            },
            {
                name: 'pluginDescription',
                message: 'Give a brief description:',
                default: 'Empty description'
            },
            {
                name: 'packageName',
                message: 'Package name?',
                default: 'com.example.genericplugin'
            },
            {
                name: 'serviceName',
                message: 'Service name?',
                default: 'GenericPlugin'
            }
        ];
        
        this.prompt(prompts, function(params) {
            this.author      = params.author;
            this.pluginName  = params.pluginName;
            this.packageName = params.packageName;
            this.serviceName = params.serviceName;
            this.pluginDescription = params.pluginDescription;
            
            done();
        }.bind(this));
    },
    
    scaffoldFolders: function() {
        var root = this.pluginName;
        this.mkdir(root);
        this.mkdir(root + '/src');
        this.mkdir(root + '/src/android');
        this.mkdir(root + '/www');
    },
    
    copyMainFiles: function() {
        this.template('_source.java', util.format('%s/src/android/%s.java', this.pluginName, this.serviceName), this);
        this.template('_interface.js', util.format('%s/www/%s.js', this.pluginName, this.pluginName), this);
        this.template('_configuration.xml', util.format('%s/plugin.xml', this.pluginName), this);
    }
});

module.exports = CordovapluginGenerator;
