#!/usr/bin/env node

'use strict';
const program = require('commander');
const request = require('request')

console.log("============= Create By Juthawong Naisanguansee =============");
program.arguments('<target>').option('-B, --body', "Opt-In Response Body").action(function (target, cmd) {
    request(
        {
            method: 'GET'
            , uri: target
        }, function (error, response, body) {
            if (error) {
                console.error(error);
            }
            console.log("============= Begin Header ==============");
            console.log(response.headers);
            console.log("============= End Header =============");
            if (cmd.body) {
                console.log("============= Begin Body =============");
                console.log(body);
                console.log("=============  End Body  =============");
            }
        });
}).parse(process.argv);
