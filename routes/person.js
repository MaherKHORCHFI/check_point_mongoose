const express =require ('express')
// const createAndSavePerson = require('../Function/myFunctions')
const Person = require('../models/Person')

const router = express.Router()

//@ http://localhost:5000/api/persons/addPerson
// add new person
// public

router.post("/addPerson",(req,res)=>{
    const newPerson = new Person({
        ...req.body
    })
    newPerson.save()
    .then(person=>res.json({msg:'New person added to Data Base', person}))
    .catch(err=>console.log(err))
})

//@ http://localhost:5000/api/persons
// get all person
// public

router.get("/",(req,res)=>{
    Person.find()
    .then(persons=>res.json({msg:'DATA fetched', persons}))
    .catch(err=>console.log(err))
})

//***********************************************************************
//Find all the people having a given name, using Model.find() -> [Person]
//***********************************************************************

//@ http://localhost:5000/api/persons/:name
// Find all the people having a given name
// public

router.get('/:name',(req,res)=>{
// console.log(req)
    Person.find({'name': {'$regex': req.params.name,$options:'i'}})   
   
    .then(person=>res.json({msg:"person found", person}))
    .catch(err=>console.log(err))
       })


//***********************************************************************
//Find just one person which has a certain food in the person's favorites.
//***********************************************************************

//@ http://localhost:5000/api/persons/favoriteFoods/:food'
// Find one person with a given favorite food
// public

router.get('/favoriteFoods/:food',(req,res)=>{
    // console.log(req.params.food)

    Person.findOne({ favoriteFoods: { $all : [req.params.food] } })  
    .then(person=>res.json({msg:"person found", person}))
    .catch(err=>console.log(err))
 } )


//***********************************************************************
//Find the (only!!) person having a given _id, 
//using Model.findById() -> Person. Use the function argument personId as the search key.
//***********************************************************************

//@ http://localhost:5000/api/persons/:id'
// Find the only person with a given id
// public

router.get('/findById/:id',(req,res)=>{
    // console.log(req.params)
    Person.findById(req.params.id)  
    .then(person=>res.json({msg:"person found", person}))
    .catch(err=>console.log(err))
 } )


//***********************************************************************
//Perform Classic Updates by Running Find, Edit, then Save
//***********************************************************************

//@ http://localhost:5000/api/persons/editPerson/:id'
// Find and Edit a person
// public

router.put('/editPerson/:id',(req,res)=>{
   console.log(req)

    Person.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})  
    .then(person=>res.json({msg:"Person updated ", person}))
    .catch(err=>console.log(err))
 } )



//***********************************************************************
//Delete One Document Using model.findByIdAndRemove
//***********************************************************************

//@ http://localhost:5000/api/persons/deletePerson/:id'
// Find and delete a person by id
// public

router.delete('/deletePerson/:id',(req,res)=>{

    Person.findByIdAndDelete(req.params.id)  
    .then(person=>res.json({msg:"Person deleted ", person}))
    .catch(err=>console.log(err))
 } )




module.exports = router
