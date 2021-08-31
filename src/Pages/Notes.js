import React, { useEffect, useState } from "react";
import axios from "axios";
import Note from "../Components/Note";
import { Container, Grid } from "@material-ui/core";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/notes");
      setNotes(res.data);
    };
    fetchData();
  }, []);

  const DeleteHandler = (id) => {
    let newNotes = notes.filter((n) => n.id !== id);
    setNotes(newNotes);
    axios.delete(`http://localhost:8000/notes/${id}`);
  };
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {notes.map((note) => (
            <Grid item xs={12} md={6} lg={4}>
              <Note
                note={note}
                key={note.title}
                DeleteHandler={DeleteHandler}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
