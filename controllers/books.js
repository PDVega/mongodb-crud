"use strict"

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/library'
const ObjectId = require('mongodb').ObjectId;


let findAllDocument = (req, res) => {
  MongoClient.connect(url, (err, db) => {
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


let insertDocument = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connected to database');
    let col = db.collection('books');
    col.insertOne(req.body, (err, doc) => {
      if(!err){
        res.send({ msg : 'Data Successfully inserted', doc})
      } else {
        res.status(500).send(err)
      }
    })  
  })
}


let findOne = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connected to database');
    let col = db.collection('books');
    let id = req.params.id
    col.find({"_id": ObjectId(id) }).toArray((err, doc) => {
      if(!err){
        res.send(doc)
      } else {
        res.status(500).send(err)
      }
    })
  })
}


let editOne = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connected to database');
    let col = db.collection('books');
    let id = req.params.id
    col.updateOne({"_id": ObjectId(id) },
    { $set: req.body }, (err, result) => {
      if(!err){
        res.send(result)
      } else {
        res.status(500).send(err)
      }
    })
  })
}


let deleteDocument = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log('Connected to database');
    let col = db.collection('books');
    let id = req.params.id
    col.deleteOne({"_id":ObjectId(id)}, (err, result) => {
      if(!err){
        res.send(result)
      } else {
        res.status(500).send(err)
      }
    })
  })
}





module.exports = {
  findAllDocument,  
  insertDocument,
  findOne,
  editOne,
  deleteDocument
}
