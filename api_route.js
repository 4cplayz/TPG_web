import express from 'express'
import { mesEquipements, mesExemplaires } from './database.js'

export const routeAPI = express.Router()

routeAPI.get('/equipements',async (req,res)=>{
  const equips = await mesEquipements.find({})
  res.json(equips)
  console.log("found equipements")
})

routeAPI.get('/equipements/:id',async (req, res) => {
  const id = req.params.id
  try {
    const equip = await mesEquipements.findOneById(id)
    res.json(equip)
  }
  catch (err) {
    console.log('erreur',err)
    res.json({})
  }
})

routeAPI.post('/equipements', async (req, res) => {
  try{
    const body = req.body
    console.log("body is :", body)
    await mesEquipements.create(body)
    res.send("New equipe was created")
  }
  catch (err) {
    console.log('erreur',err)
    console.log("Creation did not work")
    res.json({})
  }
})

routeAPI.delete('/equipements/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log("Deleting equipment with id:", id)
    const equipToDelete = await mesEquipements.findOneById(id)
    await mesEquipements.deleteOne({ _id: id })
    res.send("Equipment was successfully deleted")
  }
  catch (err) {
    console.log('erreur', err)
    console.log("Deletion did not work")
  }
})