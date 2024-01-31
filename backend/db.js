const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://swatitiwarieps:swati1234@cluster0.4idyrap.mongodb.net/Food?retryWrites=true&w=majority`;

const mongoDB = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");

    const Fooddata = await mongoose.connection.db.collection("Fooddata");
    const data = await Fooddata.find({}).toArray();

    const foodCatogory = await mongoose.connection.db.collection("foodCatogory");
    const catData = await foodCatogory.find({}).toArray();

    global.Fooddata = data;
    global.foodCatogory = catData;
    
   // return global.Fooddata
  
    //console.log(catData)
    //console.log(global.Fooddata)
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoDB;
