import express from 'express'
import { mesEquipements, mesExemplaires, mesFacts } from './database.js'

export const routeAPI = express.Router()

// equipements section //

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

// mixed section //
routeAPI.get('/equipements/:id/exemplaires', async (req, res) => {
  const id = req.params.id
  try {
    await mesEquipements.findOneById(id) // Vérifier que l'équipement existe

    // Chercher tous les exemplaires qui ont cet ID d'équipement
    const exemplaires = await mesExemplaires.find({ equipement: id })
    res.json(exemplaires)
    console.log(`Found ${exemplaires.length} exemplaires for equipment ${id}`)
  }
  catch (err) {
    console.log('erreur', err)
    res.json([]) // Retourner un tableau vide en cas d'erreur
  }
})


routeAPI.post('/equipements/:id/exemplaires',async (req, res) => {
  const id = req.params.id
  try {
    await mesEquipements.findOneById(id)
    const body = req.body

    body.equipement = id

    console.log("Creating exemplaire with:", body)
    await mesExemplaires.create(body)
    res.send("Nouvel exemplaire créé avec succès")
  }
  catch (err) {
    console.log('erreur',err)
    res.json({})
  }
})




//exemplaire section //
routeAPI.get('/exemplaires',async (req,res)=>{
  const exempl = await mesExemplaires.find({})
  res.json(exempl)
  console.log("found exemplaires")
})

routeAPI.get('/exemplaires/:id',async (req, res) => {
  const id = req.params.id
  try {
    const exempl = await mesExemplaires.findOneById(id)
    res.json(exempl)
  }
  catch (err) {
    console.log('erreur',err)
    res.json({})
  }
})

routeAPI.delete('/exemplaires/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log("Deleting exemplaire with id:", id)
    await mesExemplaires.deleteOne(id)
    res.send("Exemplaire was successfully deleted")
  }
  catch (err) {
    console.log('erreur', err)
    console.log("Deletion did not work")
  }
})



// Extra code for fun //

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