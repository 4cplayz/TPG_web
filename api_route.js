import express from "express"
import {db} from "./lowdb.js"

export const route = express.Router()


route.get("/equipements", (req,res)=>{
  db.read();
  res.json(db.data.equipements);
  console.log(200)
})

route.post("/equipements", (req,res)=>{
  db.update(({ equipements }) => {
    equipements.push(req.body);
    console.log(200)
  });
})