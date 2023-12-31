import React from "react";

function CreateArea(props) {
  const [note, setNotes] = React.useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNotes((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNotes({
        title: "",
        content: ""
    })
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitNote}
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
