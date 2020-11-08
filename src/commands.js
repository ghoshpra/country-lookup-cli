#!/usr/bin/env node
const { program } = require('commander');
const progam = require('commander');
const {
    lookup
} = require('./index')

program
    .version('1.0.0')
    .description('Country lookup')

program
    .command('lookup <countryCode>')
    .option('-c, --countryCode', 'country code')
    .action((countryCode) => {
        lookup(countryCode);
    });    

program.parse(process.argv)    