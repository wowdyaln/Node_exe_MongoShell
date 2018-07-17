// ! set database ; set collection
let database = "local"
let collection = "taipei_parking"
// !

// * set database.
db = db.getSiblingDB(database);


// $unset to remove field(s)
function removeField(){
  db[collection].update(
    { doc: { $exists: true } },
    { $unset: { doc: "" } }
  )
}

db[collection].find().forEach(document => removeField());