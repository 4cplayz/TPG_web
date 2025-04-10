import express from 'express'
import { mesEquipements, mesExemplaires, mesFacts } from './database.js'

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

    await mesEquipements.findOneById(id)

    await mesEquipements.deleteOne({ _id: id })

    res.send("Equipment was successfully deleted")
  }
  catch (err) {
    console.log('erreur', err)
    console.log("Deletion did not work")
  }
})

routeAPI.get('/facts', async (req, res) => {
  try {
    const facts = await mesFacts.find({})
    res.json(facts)
    console.log("Found facts")
  } catch (err) {
    console.log('erreur', err)
    res.json([])
  }
})

routeAPI.get('/facts/:id', async (req, res) => {
  const id = req.params.id
  try {
    const fact = await mesFacts.findOneById(id)
    res.json(fact)
  } catch (err) {
    console.log('erreur', err)
    res.json({})
  }
})

routeAPI.post('/facts', async (req, res) => {
  try {
    const body = req.body
    console.log("New fact:", body)
    await mesFacts.create(body)
    res.send("New Sahara fact was created")
  } catch (err) {
    console.log('erreur', err)
    console.log("Fact creation did not work")
    res.json({})
  }
})

routeAPI.delete('/facts/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log("Deleting fact with id:", id)
    const factToDelete = await mesFacts.findOneById(id)
    await mesFacts.deleteOne({ _id: id })
    res.send("Fact was successfully deleted")
  } catch (err) {
    console.log('erreur', err)
    console.log("Fact deletion did not work")
  }
})