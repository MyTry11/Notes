import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Notes } from "./Notes";
import { CreateNote } from "./CreateNote";
import { setNotes } from "../store/notesSlice";

export const Main = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.value);
  useEffect(() => {
    fetch("http://localhost:8080/api/notes?statuses=active")
      .then((response) => response.json())
      .then(
        (data) => dispatch(setNotes(data))
        // console.log(data)
      );
    // .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <CreateNote></CreateNote>
      <Notes></Notes>
    </div>
  );
};
