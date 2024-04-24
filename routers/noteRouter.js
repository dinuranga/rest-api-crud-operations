import express from 'express';
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from '../controllers/noteController.js';

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
