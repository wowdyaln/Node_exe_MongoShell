// ! set database ; set collection
let database = "local"
let collection = "大屯火山地區溫泉採樣分析點位資料"
// !

// * set database.
db = db.getSiblingDB(database);


// lat_wgs84
// lon_wgs84

// db[collection].aggregate([
//     // * ^^^collection
//     {
//       $addFields: {
//         "geometry": "Point",
//         // "geometry": { $literal: "Point" }
//         "geometry.coordinates": ["$lon_wgs84", "$lat_wgs84"]
//       }
//     }
//   ]);

print(doc.locationName + ` add new field(s) 'coordinates' : ${coordinates} `)

db[collection].find().forEach(document => addFields(document));
 // * ^^^collection
