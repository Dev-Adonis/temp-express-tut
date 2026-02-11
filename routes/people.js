const express = require('express');
const router = express.Router();

let { getPeople,
      createPerson,
      createPostmanPerson,
      updatePerson,
      deletePerson } = require('../controllers/people');

// router.get('/', getPeople);
// router.post('/', createPerson);
router.route('/').get(getPeople).post(createPerson);

// router.post('/postman', createPostmanPerson);
router.route('/postman').post(createPostmanPerson);

// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;