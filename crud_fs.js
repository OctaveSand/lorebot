'use strict';
const fs = require('fs');
const home = './records'

/* sample record: 

{ title:The og dick-girl,
  uid:5,
  tags:[speria, godlore, origin story,dickgirls ],
  roles:[futanari_citizen],
  body:In the beginning, there were gods, and the women who fucked them. And amoung these, was Spearia LongJohns   on; THE OG DICK-GIRL
}
*/

// create a new record with the given obj
exports.create = (input) => {
  var uid = input.uid
  var output = JSON.stringify(input);
  try {
    fs.writeFileSync(`${home}/${uid}.json`, output);
  } catch(err) {
    console.error(err)
  }
}

//return the record by uid
exports.read = (uid) => {
  var rawdata = fs.readFileSync(`${home}/${uid}.json`);
  return JSON.parse(rawdata);
}

//replace (or create) the record identified by uid with the given obj
exports.update = (uid,input) => {
}

//delete the record with the given id
exports.del = (uid) => {
  try {
    fs.unlinkSync(`${home}/${uid}.json`)
  } catch(err) {
    console.error(err)
  }
}

//return an array of records whose body contains the given string
exports.bodyContains = (string) => {
}

//return an array of records whose tags contains the given string
exports.tagsContain = (string) => {
}

//return an array of records whose title matches the given string
exports.titleIs = (title) => {
}

//return an array of records whose roles match the given array of strings
exports.titleIs = (roles) => {
}

