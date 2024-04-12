const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const env = require('dotenv').config()
const bodyParser = require('body-parser')

const task = require('./models/task.js')
const jsonB = bodyParser.json()
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/toDo").then((success) => {
    app.listen(process.env.PORT || 3000)
}).catch(e => console.log(e));

app.get('/task', async (req,res) => {
    try{
        const tasks = await task.find()
        res.status(200).json(tasks)
    } catch(e){
        console.log(e.message)
        res.status(500).json({message: e.message})
    }
})

app.post('/task', jsonB,  async (req,res) => {
    try{
        const tasks = await task.create(req.body)
        res.status(200).json(tasks)
    } catch(e){
        console.log(e.message)
        res.status(500).json({message: e.message})
    }
})

app.put('/taskTitle:id', jsonB, async(req,res) => {
    try{
        const id = req.params.id.slice(1,req.params.id.length)
        const tasks = await task.updateOne({_id: id}, {title: req.body.title['_value']})
        res.status(200).json(tasks)
    } catch(e){
        console.log(e.message)
        res.status(500).json({message: e.message})
    }
})

app.put('/taskStatus:id', jsonB, async(req,res) => {
    try{
        const id = req.params.id.slice(1,req.params.id.length)
        const tasks = await task.updateOne({_id: id}, {status: req.body.status})
        res.status(200).json(tasks)
    } catch(e){
        console.log(e.message)
        res.status(500).json({message: e.message})
    }
})

app.delete('/taskStatus:id', jsonB, async(req,res) => {
    try{
        const id = req.params.id.slice(1,req.params.id.length)
        const tasks = await task.deleteOne({_id: id})
        res.status(200).json(tasks)
    } catch(e){
        console.log(e.message)
        res.status(500).json({message: e.message})
    }
})