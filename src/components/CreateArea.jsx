// import React from 'react'

// function createArea(){

//     const [note, setNote] = useState({
//         title: "",
//         content: ""
//     });  

//     function handleChange(event){
//         const {name, value} = event.target;

//         setNote((prevNote) =>{
//             return {
//                 ...prevNote, // spread operator
//                 [name] : value // []-> this converts the name string into actual value otherwise it would have behave just like string
//             };
//         })
//     }

//     function submitNote(event){
//         props.onAdd(note);
//         setNote({
//             title : "",
//             content 
//         });
//         event.preventDefault();
//     }

//     return (
//         <div>
//         <form >
//             <input name = "title" placaholder = "Title" />
//             <textarea 
//             name="content" 
//             onChange={handleChange}
//             id="" cols="30" 
//             rows="10" 
//             placeholder= "Take a note ..."
//             value = {note.content}
//             />
//             <button onClick={submitNote}>Add</button>
//         </form>
//         </div>
//     );
// }

// export default createArea

import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;