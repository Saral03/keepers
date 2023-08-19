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
  return (
    <div>
      <Header />
      <CreateArea onAdd={insertNote} />
      {listOfNotes.map((notesItem) => {
        return <Note title={notesItem.title} content={notesItem.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
