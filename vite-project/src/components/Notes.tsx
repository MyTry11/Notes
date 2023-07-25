// import React from "react";

import { useAppSelector } from "../hooks";
import { NotesInt } from "../store/notesSlice";

export const Notes = () => {
  const notes = useAppSelector((state) => state.notes.value);

  return (
    <>
      <ul className="w-[1040px] flex flex-wrap ">
        {notes.map((note: NotesInt) => {
          return (
            <li
              key={note.id}
              className="w-[240px] h-[120px] border-2 rounded-lg mr-3 mb-3"
            >
              <p>{note.title}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
