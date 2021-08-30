import { Button, Container, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Create() {
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDetails, setErrorDetails] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [value, setValue] = useState("money");

  const SubmitHandler = (event) => {
    event.preventDefault();
    setErrorTitle(false);
    setErrorDetails(false);

    if (title == "") {
      setErrorTitle(true);
    }
    if (details == "") {
      setErrorDetails(true);
    }
    if (title && details !== "") {
      console.log(title, details);
    }
  };

  const HandleRadioChange = (e) => {
    setValue(e.target.value);

  };

  return (
    <div>
      <Container>
        <form noValidate autoComplete="off" onSubmit={SubmitHandler}>
          <Typography variant="h5" color="textSecondary" align="left">
            Create a New Note
          </Typography>
          <TextField
            value={title}
            fullWidth
            required
            label="Note Title"
            type="text"
            variant="outlined"
            margin="normal"
            error={errorTitle}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            value={details}
            fullWidth
            required
            label="Details"
            variant="outlined"
            multiline
            margin="normal"
            rows={4}
            error={errorDetails}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <FormControl style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginTop:20
            }} 
            color="primary">
          <FormLabel >Note Category</FormLabel>
          <RadioGroup
         
            value={value}
            onChange={HandleRadioChange}
          >
            <FormControlLabel color="primary" value="money" control={<Radio color="primary" />}  label="Money"  />
            <FormControlLabel value="todos" control={<Radio color="primary"/>} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio color="primary"/>} label="Reminders" />
            <FormControlLabel value="work" control={<Radio color="primary"/>} label="work" />
            
          </RadioGroup>
        </FormControl>
          <Button
            variant="contained"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginTop:20
            }}
            color="primary"
            align="left"
            endIcon={<ChevronRightIcon />}
            type="submit"
          >
            Submit
          </Button>
          
        </form>
      
        
      </Container>
    </div>
  );
}
