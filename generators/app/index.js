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
    },
    {
      type: 'confirm',
      name: 'vsCode',
      message: 'Want me to generate VS Code debug configuration?',
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
      safeName = 'WebApp';
    }
    this.props.safeName = safeName;
    var dir = this.props.createDir ? safeName : '';
    
    this.log(chalk.red('\nCreating files...\n'));
    
    this.fs.copy(
      this.templatePath('ignorefile'),
      this.destinationPath(dir, '.gitignore')
    );
    this.fs.copy(
      this.templatePath('global.json'),
      this.destinationPath(dir, 'global.json')
    );
    this.template(
      this.templatePath('WebApp.sln'),
      this.destinationPath(dir, safeName + '.sln'),
      this.props
    );
    ['appsettings.json', 'package.json', 'project.json', 'Program.cs', 'Startup.cs', 'tsconfig.json', 'web.config'].forEach(function (file) {
      this.template(
        this.templatePath('src/WebApp', file),
        this.destinationPath(dir, 'src', safeName, file),
        this.props
      );
    }.bind(this));
    if (this.props.vsCode) {
      this.template(
        this.templatePath('src/WebApp/.vscode'),
        this.destinationPath(dir, 'src', safeName, '.vscode'),
        this.props
      );
    }
    this.template(
      this.templatePath('src/WebApp/WebApp.xproj'),
      this.destinationPath(dir, 'src', safeName, safeName + '.xproj'),
      this.props
    );
    ['Api', 'Controllers', 'Properties', 'Views', 'wwwroot'].forEach(function (file) {
      this.template(
        this.templatePath('src/WebApp', file),
        this.destinationPath(dir, 'src', safeName, file),
        this.props
      );
    }.bind(this));
  },


  install: function () {
    this.log('\n' + chalk.red('Installing npm dependencies...') + '\n');
    if (this.props.createDir) {
      process.chdir(this.destinationPath(this.props.safeName, 'src', this.props.safeName));
    } else {
      process.chdir(this.destinationPath('src', this.props.safeName));
    }
    this.npmInstall('', function () {
      this.log(chalk.red('\nHave fun working on ' + this.props.appName + '! <3'));
    }.bind(this));
  }
});
