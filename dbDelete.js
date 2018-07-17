// ! set database ; set collection
let database = "local"
let collection = "大屯火山活動監測_鑽探點位_鑽探點"
// !

// * set database.
db = db.getSiblingDB(database);

// .deleteMany to remove all document that match the query.
db[collection].deleteMany(
  { "X座標": "" } // query
)
     
     
