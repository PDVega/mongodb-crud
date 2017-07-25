"use strict"

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library'


let findAllDocument = (req, res) => {
  MongoClient.connect(url, function(err, db){
    console.log('Connected to database');
    let col = db.collection('books');
    col.find({}).toArray((err, docs) => {
      if(!err){
        res.send(docs)
      } else {
        res.status(500).send(err)
      }
    })
  })
}




// let insertDocument = function(db, callback){
//   var collection = db.collection('books');
//   collection.insertMany([{isbn:'978-1-60309-057-5', title:'Dragon Puncher', author:'James Kochalka', category:'All Ages', stock:3},{isbn:'978-1-891830-77-8', title:'Every Girl is the End of the World for Me', author:'Jeffrey Brown', category:'Mature (16+)', stock:5}], (err, result) => {
//     .then(result => {
//       
//     })
//   })
// }





module.exports = {
  // insertDocument
  findAllDocument  
}
