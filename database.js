import database from 'local-nosql-db'


const Schema = database.Schema


const uri = 'C:/Users/tommy/db.json'


await database.connect(uri)


//Je crée la structure

const equipementSchema = new Schema(

{

"nom": {type:String,required:true},

"fabriquant": {type:String,required:true},

}

)

const exemplaireSchema = new Schema(

{

"equipement": {type:database.Types.ObjectId, ref:"Equipements", required:true},

"date": {type:Number,default:()=>{Date.now()}}

}
)

const factsSchema = new Schema(
  {
    "description" : {type:String,required:true}
  }
)

//Je crée les tables

export const mesEquipements = database.model('Equipements',equipementSchema )
export const mesExemplaires = database.model('Exemplaires',exemplaireSchema )
export const mesFacts = database.model('Facts',factsSchema )