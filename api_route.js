import express from 'express'
import { mesEquipements, mesExemplaires } from './database.js'

export const routeAPI = express.Router()

routeAPI.get('/equipements',async (req,res)=>{
  const equips = await mesEquipements.find({})
  res.json(equips)
  console.log("found equipements")
})

routeAPI.get('/equipements/:id', (req,res)=>{
const id = req.params.id

})