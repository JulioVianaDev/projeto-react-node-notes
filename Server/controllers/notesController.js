const Note = require("../models/Note");

module.exports = class NotesControler{
    static async getAll(req,res){
          try {
            const users = await Note.findAll();
            res.json(users);
          } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' });
          }
    }
    static async cadastrarNote(req,res){
          try {
            const { title, description, date } = req.body;
            const note = await Note.create({ title, description, date });
            res.json(note);
          } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' });
          }
    }
    static async pegarNotePeloId(req,res){
        try {
            const { id } = req.params;
            const note = await Note.findByPk(id);
            if (note) {
                res.json(note);
            } else {
                res.status(404).json({ error: 'Note not found' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    static async editarNote(req,res){
        try {
            const { id } = req.params;
            const { title, description, date } = req.body;
            const note = await Note.findByPk(id);
            if (note) {
                note.title = title || note.title;
                note.description = description || note.description;
                note.date = date || note.date;
                await note.save();
                res.json(note);
            } else {
                res.status(404).json({ error: 'Date not found' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    static async deleteNote(req,res){
        try {
            const { id } = req.params;
            const note = await Note.findByPk(id);
            if (note) {
                await note.destroy();
                res.json({ message: 'Note deleted successfully' });
            } else {
                res.status(404).json({ error: 'Note not found' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' });
        }
    }

}