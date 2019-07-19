export const CURRENT_NOTES = 'CURRENT_NOTES';

export const NOTES_LIST = 'NOTES_LIST';

export const getNotesList = payload => ({
    type: NOTES_LIST,
    payload
});


export const getCurrentNotes = payload => ({
    type: CURRENT_NOTES,
    payload
}); 