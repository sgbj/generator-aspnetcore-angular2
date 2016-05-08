'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stylish ' + chalk.red('aspnetcore-angular2') + ' generator!'
    ));

    var prompts = [{
      name: 'appName',
      message: 'What\'s the project name ' + chalk.red('(this will also be your namespace name)') + '?'
    }, 
    {
      type: 'confirm',
      name: 'createDir',
      message: 'Want me to create the directory for you?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    var safeName = this.props.appName.replace(/^[^a-zA-Z]+/, '').replace(/[^a-zA-Z0-9]/g, '');
    if (safeName.length == 0) {
      safeName = 'MyWebApp';
    }
    this.props.safeName = safeName;
    this.props.safeNameLower = safeName.toLowerCase();
    var dir = this.props.createDir ? safeName : '';
    
    this.log(chalk.red('\nCreating files...\n'));
    
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath(dir, '.gitignore')
    );
    this.fs.copy(
      this.templatePath('global.json'),
      this.destinationPath(dir, 'global.json')
    );
    this.template(
      this.templatePath('MyWebApp.sln'),
      this.destinationPath(dir, safeName + '.sln'),
      this.props
    );
    ['appsettings.json', 'gulpfile.js', 'package.json', 'project.json', 'Startup.cs', 'tsconfig.json'].forEach(function (file) {
      this.template(
        this.templatePath('src/MyWebApp', file),
        this.destinationPath(dir, 'src', safeName, file),
        this.props
      );
    }.bind(this));
    this.template(
      this.templatePath('src/MyWebApp/MyWebApp.xproj'),
      this.destinationPath(dir, 'src', safeName, safeName + '.xproj'),
      this.props
    );
    ['app', 'Controllers', 'Properties', 'Views'].forEach(function (file) {
      this.template(
        this.templatePath('src/MyWebApp', file),
        this.destinationPath(dir, 'src', safeName, file),
        this.props
      );
    }.bind(this));
  },
  
  end: function () {
    this.log(chalk.red('\nHave fun working on ' + this.props.appName + '! <3'));
  }
});
