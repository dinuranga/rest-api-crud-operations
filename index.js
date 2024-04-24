import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

let notes = [
    { 
        title: "Sample Note 1",
        content: "This is the content of Sample Note 1."
    },
    { 
        title: "Sample Note 2",
        content: "This is the content of Sample Note 2."
    }
];

let noteIds = notes.map((note, index) => index);

// All notes
app.get("/api", (req, res) => {
    const data = notes.map((note, index) => {
        return { id: index, ...note };
    });
    res.status(200).json({ message: "Notes retrieved successfully", data });
});

// Note by ID
app.get("/api/:id", (req, res) => {
    const id = req.params.id;
    if (!noteIds.includes(parseInt(id))) {
        return res.status(404).json({ message: "Note not found!" });
    }
    const data = notes[parseInt(id)];
    res.status(200).json({ message: "Note retrieved successfully", data });
});

// Create a new note
app.post("/api", (req, res) => {
    const { title, content } = req.body;
    const id = notes.length;
    notes.push({ title: title, content: content });
    noteIds.push(id);
    res.status(201).json({ message: "Note created successfully", data: { id: id, ...notes[id] } });
});

// Update a note by ID
app.patch("/api/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    if (!noteIds.includes(parseInt(id))) {
        return res.status(404).json({ message: "Note not found!" });
    }
    notes[parseInt(id)] = { ...notes[parseInt(id)], ...updatedData };
    res.status(200).json({ message: "Note updated successfully", data: updatedData });
});

// DELETE a note by ID
app.delete("/api/:id", (req, res) => {
    const id = req.params.id;
    if (!noteIds.includes(parseInt(id))) {
        return res.status(404).json({ message: "Note not found!" });
    }
    notes.splice(parseInt(id), 1);
    noteIds.splice(noteIds.indexOf(parseInt(id)), 1);
    res.status(200).json({ message: "Note removed successfully" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});