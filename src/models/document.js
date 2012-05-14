var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

var documentSchema = new Schema({
  title : String,
  uri: String,
  body : String,
  created_at : Date,
  updated_at : Date
});

var sourceSchema = new Schema({
  name : String,
  documents : [documentSchema]
});


module.exports = mongoose.model("Source", sourceSchema);
module.exports = mongoose.model("News", documentSchema);