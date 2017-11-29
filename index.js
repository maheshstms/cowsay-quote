#!/usr/bin/env node

let request = require('request');
let cow     = require('cowsay');



//Get Home dir of user
//process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE

const quoteUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
      cowsay   = (quote) => {
                                _ = quote.split(' '); //Male it a array
                                let option = { _, W: 40 }; //Wordwrap
                                console.log(cow.say(option));
                       };
//Make request and get quote
request(quoteUrl, (err, response, body) => {
                        if(err) { //TODO: Get local quote from store
                        }
                        let user = require("os").userInfo().username;
                        let msg = `Welcome ${user}`; //TODO: Get username

                        try {
                            let quote = JSON.parse(body);
                            msg = `${quote.quoteText} -${quote.quoteAuthor}`;
                        } catch(e) {
                            msg = `Welcome ${user}`;
                        }
                        cowsay(msg);
                    });

