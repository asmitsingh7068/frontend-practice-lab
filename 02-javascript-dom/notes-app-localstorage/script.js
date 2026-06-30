// Select Elements

const titleInput = document.getElementById("noteTitle");
const textInput = document.getElementById("noteText");
const addBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const searchInput = document.getElementById("searchInput");

// Variables
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editIndex = -1;

// Save to Local Storage


function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Display Notes

function displayNotes(searchText = "") {

    notesContainer.innerHTML = "";

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.text.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredNotes.length === 0) {

        notesContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-note-sticky"></i>
                <h3>No Notes Found</h3>
                <p>Create your first note.</p>
            </div>
        `;

        return;
    }

    filteredNotes.forEach((note) => {

        const originalIndex = notes.indexOf(note);

        const card = document.createElement("div");
        card.className = "note-card";

        card.innerHTML = `
            <h3>${note.title}</h3>

            <p>${note.text}</p>

            <div class="note-actions">

                <button class="edit-btn" onclick="editNote(${originalIndex})">
                    <i class="fa-solid fa-pen"></i> Edit
                </button>

                <button class="delete-btn" onclick="deleteNote(${originalIndex})">
                    <i class="fa-solid fa-trash"></i> Delete
                </button>

            </div>
        `;

        notesContainer.appendChild(card);

    });

}

// Add / Update Note


addBtn.addEventListener("click", () => {

    const title = titleInput.value.trim();
    const text = textInput.value.trim();

    if (title === "" || text === "") {
        alert("Please enter title and note.");
        return;
    }

    const note = {
        title,
        text
    };

    if (editIndex === -1) {

        notes.push(note);

    } else {

        notes[editIndex] = note;
        editIndex = -1;
        addBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Note`;

    }

    saveNotes();
    displayNotes();

    titleInput.value = "";
    textInput.value = "";

});
// Delete Note

function deleteNote(index) {

    const confirmDelete = confirm("Delete this note?");

    if (!confirmDelete) return;

    notes.splice(index, 1);

    saveNotes();

    displayNotes(searchInput.value);

}

// Edit Note


function editNote(index) {

    titleInput.value = notes[index].title;
    textInput.value = notes[index].text;

    editIndex = index;

    addBtn.innerHTML = `
        <i class="fa-solid fa-floppy-disk"></i>
        Update Note
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Search


searchInput.addEventListener("keyup", () => {

    displayNotes(searchInput.value);

});

// Initial Load

displayNotes();