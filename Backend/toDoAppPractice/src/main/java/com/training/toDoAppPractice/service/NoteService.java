package com.training.toDoAppPractice.service;

import com.training.toDoAppPractice.entity.Note;

import java.util.List;

public interface NoteService {

    List<Note> getNotes();

    Note saveNote(Note note);

    Note updateNote(Note note);

    void deleteNote(long id);
}
