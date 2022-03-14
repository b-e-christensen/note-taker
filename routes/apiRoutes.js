// in route /api

const router = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')


router.get('/notes', (req, res) => {
    const data = require('../db/db.json')
    res.json(data)
})

router.post('/notes', (req, res) => {
    let newNote = req.body
    newNote.id = uuidv4()
    console.log(newNote);
    const data = require('../db/db.json')
    data.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(data), (err, file) => {
        if (err) throw err;
        console.log('Saved!');
      })
    

    //end -- responds with new note entered
    res.json(newNote)
})

module.exports = router