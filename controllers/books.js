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
    col.insertOne({isbn:'978-1-60309-057-6', title:'Learning MongoDB', author:'JS', category:'Education', stock:1}, (err, doc) => {
      if(!err){
        res.send('Data Successfully inserted')
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
    let isbn = req.body.isbn
    let title = req.body.title
    let author = req.body.author
    let category = req.body.category
    let stock = req.body.stock
    col.updateOne({"_id": ObjectId(id) },
    { $set: 
      {
      isbn: isbn,
      title: title,
      author: author,
      category: category,
      stock: stock 
      } 
    }, (err, result) => {
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
