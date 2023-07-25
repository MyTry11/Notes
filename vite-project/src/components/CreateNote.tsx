import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setNotes, addNote } from "../store/notesSlice";
import { current } from "@reduxjs/toolkit";

export const CreateNote = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.value);
  const [titleValue, setTitleValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [blured, setBlured] = useState([]);
  const [three, setThree] = useState<[] | boolean[]>([]);
  const [count, setCount] = useState<number>(0);

  const [textValue, setTextValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionValue(e.target.value);
  };
  const obb = {
    createdAt: "2023-07-20T15:52:42.921Z",
    expirationDate: "2026-07-24T16:38:18.129Z",
    id: Date.now(),
    status: "active",
    title: Date.now(),
    updatedAt: "2023-07-20T15:52:42.92",
  };

  const createNote = () => {
    fetch("http://localhost:8080/api/notes/", {
      method: "POST",
      body: JSON.stringify({
        // Add parameters here
        title: titleValue,
        text: textValue,
        description: descriptionValue,
        expirationDate: "2026-07-24T16:38:18.129Z",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.code != "ValidationError") {
          dispatch(addNote(data));
        } else {
          console.log("validation error");
        }
      })
      // .then((data) => {
      //   setTitleValue("");
      //   setTextValue("");
      //   setDescriptionValue("");
      // })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // const focusHandlerStart = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFocused(true);
  //   setThree((current) => [...current, true]);
  //   console.log(three);
  // };

  // const focusHandlerAll = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.name === "title") {
  //     focusHandlerStart(e);
  //   } else {
  //     setThree((current) => [...current, true]);
  //   }
  // };
  // const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(three);
  //   setThree((current) => {
  //     const filtered = current.filter((el, i) => i !== 0);
  //     return filtered;
  //   });
  //   console.log(three);
  //   // console.log(Boolean(three.length));

  //   three.length ? "" : setFocused(false);
  // };
  const focusHandlerAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount((prev) => (prev += 1));
    console.log(count);
    setFocused(true);
  };
  // const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setCount((prev) => (prev -= 1));
  //   console.log(count);
  //   // setTimeout(() => {
  //   setFocused(() => {
  //     return count === 1 ? false : true;
  //   });
  //   // }, 0);
  // };
  useEffect(() => {
    console.log(count);
  });
  // console.log(focused);
  return (
    <>
      <input
        type="text"
        name="title"
        value={titleValue}
        onChange={handleTitleChange}
        className="border-2"
        onFocus={focusHandlerAll}
        // onBlur={blurHandler}
      />

      <button onClick={(e) => setFocused(false)}>console.log</button>
      {/* <button onClick={(e) => dispatch(setNotes())}>console.log2</button> */}

      {focused && (
        <div>
          <input
            type="text"
            name="text"
            onChange={handleTextChange}
            onFocus={focusHandlerAll}
            // onBlur={blurHandler}
            className="border-2"
          />
          <input
            type="text"
            name="description"
            onChange={handleDescriptionChange}
            onFocus={focusHandlerAll}
            // onBlur={blurHandler}
            className="border-2"
          />
          <button onClick={createNote}></button>
        </div>
      )}
    </>
  );
};
