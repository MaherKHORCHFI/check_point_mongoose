const mongoose = require ('mongoose')
const config = require ('config')

const connectDB = () =>{
    mongoose.connect(config.get("MONGO_URI"),{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>console.log('Mongoose connected...'))
    .catch(err=>console.log(err))
    
}

module.exports = connectDB

// mongoose.connect(process.env.MONGO_URI, { 
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
//   useCreateIndex: true 
// })