// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import notes from "../notes";

// function App(){

//     const [notes, setNotes] = useState([]);

//     function addNote(newNote){
//         setNotes(prevNotes =>{
//             return [...prevNotes, newNote];
//         });
//     }

//     function addNote(note){
//         console.log(note);
//     }

//     function deleteNote(id){
//          setNotes(prevNotes =>{
//             return prevNotes.filter((noteItem, index) =>{
//                 return index !== id;
//             });
//          });
//     }


//     return(
//         <div>
//         <Header />
//         <createArea onAdd ={addNote}/>
//         {notes.map((noteItem, index)=>{
//             return <Note 
//             key = {index}
//             id = {index}
//             title = {noteItem.title} 
//             content = {noteItem.content} 
//             onDelete = {deleteNote} />
//         })}
//         {/* {notes.map(createNote => ( */}
//         {/* <Note
//             key = {createNote.key}
//             title = {createNote.title}
//             content = {createNote.content}
//          /> */}
//         <Footer />
//         </div>
//     );
// }

// export default App;
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App; 