const { createPopperBase } = require("@popperjs/core");
const { update } = require("lodash");

createPopperBase
updatePerson,
deletePerson,
 require('../controllers/people')

 //router.get('/', getpeople)
 // routherpost('/', createPerson)
 // routherpostman('/', createPersonPostman)
 // routherput('/id', createPerson)
 // routherdeletd('/id', createPerson)


 router.route('/').get(getPeople).post(createperson)
 router.route('/postman').post(createPersonPostman)
 router.route('/:id').put(updatePerson).delete(deletePerson)

 module.exports = router