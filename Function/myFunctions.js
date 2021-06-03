const Person = require ('../models/Person')


function createAndSavePerson () {
    let ilef = new Person({
        name: 'Ilef',
        age : 6, 
        favoriteFoods:['cannelloni']
        })
    ilef.save((err,data)=>
    err? console.log(err) : console.log('createAndSavePerson'))
}

module.exports = createAndSavePerson