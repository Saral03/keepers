import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [listOfNotes, setNotes] = React.useState([]);
  function insertNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function deleteNote(id){
    setNotes(prevNotes=>{
        return prevNotes.filter((note,index)=>{
            return index!==id;
        })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={insertNote} />
      {listOfNotes.map((notesItem,index) => {
        return <Note
        key= {index}
        id={index}
        title={notesItem.title} 
        content={notesItem.content} 
        onDelete={deleteNote}/>;
        
      })}
      <Footer />
    </div>
  );
}

export default App;
