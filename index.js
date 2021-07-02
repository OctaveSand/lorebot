'use strict'
// imports
const dotenv = require('dotenv');
const Discord = require('discord.js');
const db = require('./src/storage/filesystem.js');
const lore = require('./src/api/index.js');
const conf = require('./config.json');

// init
dotenv.config();
const client = new Discord.Client();
client.login(process.env.TOKEN);

console.log(`running. prefix is: ${conf.prefix}`)


// start

client.on('message', message => {
  //console.log(message.content)
  if (message.content === `${conf.prefix} ping`) {
    message.channel.send('Pong.');
  }else if (message.content.startsWith(`${conf.prefix} list-all`)) {
    lore.list(message)
  }

});

