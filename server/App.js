const express = require('express')
const models = require('./models')
const sequelize = require('sequelize')
const cors = require('cors')
const bcrypt = require('bcryptjs')

const app = express()

app.use(cors());
app.use(express.json())

const SALT_ROUNDS = 10;

app.get('/books', async (req, res) => {
    const books = await models.Book.findAll({

    })
    res.json(books)
})

app.post('/new-book', async (req, res) => {
    const newBook = await models.Book.build({
        title: req.body.title,
        genre: req.body.genre,
        publisher: req.body.publisher,
        imageURL: req.body.imageURL,
        year: req.body.year
    })
    const books = await newBook.save()
    const bookResponse = await books.then(response => {
        res.json('Success!')
    })
    
})

app.post('/registration', async (req, res) => {
    const databaseUser = await models.User.findOne({
        where: {
            username: req.body.username,
          },
    })
    if (databaseUser == null) {
        bcrypt.hash(req.body.password, SALT_ROUNDS, async (error, hash) => {
            if(error) {
                res.json({success: false, message: `Error ${error}, user not registered!`})
            }
            else {
                const newUser = models.User.build({
                    username: req.body.username,
                    password: hash,
                    email: req.body.email
                })
                const savedUser = newUser.save()
                res.json({success: true, message: `Success!`})
            }
        })
    }
})

app.post('/login', async (req, res) => {
    const retrievedUser = await models.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if(retrievedUser != null) {
            bcrypt.compare(req.body.password, retrievedUser.password, (error, result) => {
                if(result) {
                    res.json({success: true, username: retrievedUser.username, userID: retrievedUser.id})
                } else {
                    res.json({success: false, message: error})
                }
            })
        }
})

app.listen(4200, () => {
    console.log('server start!')
})