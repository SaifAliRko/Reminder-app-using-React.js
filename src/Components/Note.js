import { Card, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root:{
        textAlign:'left'
    },
    avatar: {
      backgroundColor: (note) => {
        if (note.category === 'work') {
          return yellow[700]
        }
        if (note.category === 'money') {
          return green[500]
        }
        if (note.category === 'todos') {
          return pink[500]
        }
        return blue[500]
      },
    }
  })

export default function Note({ note ,DeleteHandler}) {
  const classes = useStyles(note);

  return (
  
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={()=>{
                  DeleteHandler(note.id)        
              }}>
              <DeleteOutlinedIcon  />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />

        <CardContent>
          <Typography  variant="body2" color="textSecondary" component="p">
            {note.details}
          </Typography>
        </CardContent>
      </Card>

  );
}
