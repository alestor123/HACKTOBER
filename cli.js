#!/usr/bin/env node
var hacktober = require('./App'),
chalk = require('chalk'),
figlet = require('figlet');
(async () => {
var prss = await hacktober(process.argv[2] , process.argv[3])
figlet('Hacktober Fest',(err,data) => {
console.log(chalk.bold.yellowBright(data) + chalk.bold.greenBright('\n' + prss.login + prss.work + '\n') + chalk.bold.redBright('\n Wishing you a happy hacktober fest \n'))
prss.prs.map(prs => console.log(chalk.bold.cyanBright('\n Created a pr ' + chalk.underline(prs.name) + ' on ' + chalk.underline(prs.time) + '\n')))

})
})();
