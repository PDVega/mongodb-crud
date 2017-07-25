# mongodb-crud

npm install --save mongodb
mongo
use library
db.createCollection('books')

db.books.insertMany([{isbn:'978-1-60309-057-5', title:'Dragon Puncher', author:'James Kochalka', category:'All Ages',
stock:3},{isbn:'978-1-891830-77-8', title:'Every Girl is the End of the World for Me', author:'Jeffrey Brown', categor
y:'Mature (16+)', stock:5}])

db.books.find()
{ "_id" : ObjectId("5976cb6c98f0c1b0bc22f71d"), "isbn" : "978-1-60309-057-5", "title" : "Dragon Puncher", "author" : "J
ames Kochalka", "category" : "All Ages", "stock" : 3 }
{ "_id" : ObjectId("5976cb6c98f0c1b0bc22f71e"), "isbn" : "978-1-891830-77-8", "title" : "Every Girl is the End of the W
orld for Me", "author" : "Jeffrey Brown", "category" : "Mature (16+)", "stock" : 5 }
