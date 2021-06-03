const mongoose =require ('mongoose')


const PersonSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },

    age:{
        type : Number
    },

    favoriteFoods:{
        type : [String]
    },
    dateOfInscription:{
        type : Date,
        default : Date.now()
    }
})


module.exports = mongoose.model("person",PersonSchema)