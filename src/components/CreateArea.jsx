import React from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function handleClick(event){
    props.onAdd();
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
