function reducer(state, action) {
    switch (action.type) {
        case 'add-note':
            const newNote = {
                id: Math.floor(Math.random() * 100),
                message: action.payload.message,
                title: action.payload.title,
                done: false
            }
            const newListOfNotesAddOne = [...state.listOfNotes, newNote]
            const newStateAddNote = {
                ...state, listOfNotes: newListOfNotesAddOne
            }
            return newStateAddNote
        case 'remove-note':
            const newListOfNotesWithoutPayloadNote = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newStateWithNoteDeleted = {...state, listOfNotes: newListOfNotesWithoutPayloadNote}
            return newStateWithNoteDeleted
        case 'update-note':
            const newListOfNotes = state.listOfNotes.filter(note => note.id !== action.payload.id)
            const newListOfNotesWithNotification = [...newListOfNotes, action.payload]
            const newStateModifiedCheckbox = { ...state, listOfNotes: newListOfNotesWithNotification }
            return newStateModifiedCheckbox
    }
}

export default reducer