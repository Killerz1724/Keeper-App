import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';  
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });


  const [expanding, setExpanding] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expanded(){

    setExpanding(true)

  }
  return (

  
    <div>
      <form className="create-note">
        {expanding && <input
      name="title"
      onChange={handleChange}
      value={note.title}
      placeholder="Title"
    />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expanded}
          value={note.content}
          placeholder="Take a note..."
          rows={expanding ? "3" : "1"}
        />
        <Zoom in={expanding}>
          <Fab variant= "contained" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
