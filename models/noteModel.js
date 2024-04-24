let notes = [
    { 
        title: "Note 1",
        content: "This is the content of Sample Note 1."
    },
    { 
        title: "Note 2",
        content: "This is the content of Sample Note 2."
    }
];

let noteIds = notes.map((note, index) => index);

export { 
    notes, 
    noteIds 
};
