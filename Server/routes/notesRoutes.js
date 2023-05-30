const router = require('express').Router();
const notesController = require('../controllers/notesController');


router.route("/")
    .get(notesController.getAll)
    .post(notesController.cadastrarNote);
router.route("/:id")
    .get(notesController.pegarNotePeloId)
    .put(notesController.editarNote)
    .delete(notesController.deleteNote);

module.exports = router;