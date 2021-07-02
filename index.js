'use strict'
// imports
const dotenv = require('dotenv');
const Discord = require('discord.js');
const db = require('./crud_fs.js');
const lore = require('./lore.js');
const {prefix} = require('./config.json');

// init
dotenv.config();
const client = new Discord.Client();
client.login(process.env.TOKEN);

console.log(`running. prefix is: ${prefix}`)


// start

client.on('message', message => {
  //console.log(message.content)
  if (message.content === `${prefix} ping`) {
    message.channel.send('Pong.');
  }else if (message.content.startsWith(`${prefix} list-all`)) {
    lore.list(message)
  }

});

