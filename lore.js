'use strict'
const db = require('./crud_fs.js');

// list all articles
exports.list = (message) => {
    message.channel.send("** My complete list of articles are as follows **");
    var articles = db.list();
    articles.forEach( (a,i) => {
    message.channel.send(`${i} :: ${a.title}`)
  });

  var filter = m => m.author.id === message.author.id
  message.channel.send(`What number would you like to read? 0 - ${articles.length -1} (\`C\` for cancel)`).then(() => {
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
    })
    .then(message => {
      message = message.first()
      if (message.content.toUpperCase() == 'C') {
        message.channel.send(`Cancelled`)
      } else if ( ! Number.isNaN(+message.content)) {
        var i = +message.content
        message.channel.send(articles[i].body)
      } else {
        message.channel.send(`Cancelled: Invalid Response`)
      }
    })
    .catch(collected => {
        message.channel.send('Timeout');
    });
  })
}
