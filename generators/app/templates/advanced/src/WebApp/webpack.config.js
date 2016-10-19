switch (process.env.ASPNETCORE_ENVIRONMENT) {
    case 'Development':
        module.exports = require('./config/webpack.dev');
        break;
    case 'Production':
    default:
        module.exports = require('./config/webpack.prod');
        break;
}