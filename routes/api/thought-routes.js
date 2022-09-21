const router = require('express').Router();
const {
   getThought,
   getThoughtById,
   createThought,
   updateThought,
   deleteThought,
   addReaction,
   deleteReaction 
} = require('../../controllers/thought-controller');

//GET all and POST at /api/thoughts
router.route('/')
    .get(getThought)
    .post(createThought);

//GET one, PUT, and DELETE at /api/thoughts/:id
router.route('/:id')
    .get(getThoughtById)   
    .put(updateThought)
    .delete(deleteThought);

//PUT reaction and DELETE reaction
router.route('/:thoughtId/reactions')
    .post(addReaction)
    // .delete(deleteReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .put(deleteReaction)

module.exports = router;