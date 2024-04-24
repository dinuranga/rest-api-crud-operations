import { notes, noteIds } from '../models/noteModel.js';

const getAllNotes = (req, res) => {
    const data = notes.map((note, index) => {
        return { id: index, ...note };
    });
    res.status(200).json({ message: "Notes retrieved successfully", data });
};

const getNoteById = (req, res) => {
    const id = req.params.id;
    if (!noteIds.includes(parseInt(id))) {
        return res.status(404).json({ message: "Note not found!" });
    }
    const data = notes[parseInt(id)];
    res.status(200).json({ message: "Note retrieved successfully", data });
};

const createNote = (req, res) => {
    const { title, content } = req.body;
    const id = notes.length;
    notes.push({ title: title, content: content });
    noteIds.push(id);
    res.status(201).json({ message: "Note created successfully", data: { id: id, ...notes[id] } });
};

const updateNote = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    if (!noteIds.includes(parseInt(id))) {
        return res.status(404).json({ message: "Note not found!" });
    }
    notes[parseInt(id)] = { ...notes[parseInt(id)], ...updatedData };
    res.status(200).json({ message: "Note updated successfully", data: updatedData });
};

const deleteNote = (req, res) => {
    const id = req.params.id;
    if (!noteIds.includes(parseInt(id))) {
        return res.status(404).json({ message: "Note not found!" });
    }
    notes.splice(parseInt(id), 1);
    noteIds.splice(noteIds.indexOf(parseInt(id)), 1);
    res.status(200).json({ message: "Note removed successfully" });
};

export { 
    getAllNotes, 
    getNoteById, 
    createNote, 
    updateNote, 
    deleteNote 
};