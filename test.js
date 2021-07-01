var db = require('./crud_fs.js');

var test_in = { title:'The og dick-girl',
  uid:5,
  tags:['speria', 'godlore', 'origin story','dickgirls'],
  roles:['futanari_citizen'],
  body:'In the beginning, there were gods, and the women who fucked them. And amoung these, was Spearia LongJohns   on; THE OG DICK-GIRL'
}

//db.create(test_in)
foo = db.list()
console.log(`${foo}`)

foo.forEach(a => console.log(a.body))

