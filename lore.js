'use strict'
const db = require('./crud_fs.js');

// list all articles
exports.list = (message) => {
    message.channel.send("** My complete list of articles are as follows **");
  db.list().forEach( (a,i) => {
    message.channel.send(`${i} :: ${a.title}`)
  });
}


// sample prompt code: 
/*
  var filter = m => m.author.id === message.author.id
  message.channel.send(`Are you sure to delete all data? \`YES\` / \`NO\``).then(() => {
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
    })
    .then(message => {
      message = message.first()
      if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
        message.channel.send(`Deleted`)
      } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
        message.channel.send(`Terminated`)
      } else {
        message.channel.send(`Terminated: Invalid Response`)
      }
    })
    .catch(collected => {
        message.channel.send('Timeout');
    });
  })
}
*/
