import React from 'react';
import { Box, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    paddingLeft: 5,
  },
  container: {
    paddingTop: 5,
    display: 'flex',
  },
  inputText: {
    width: 700,
    color: 'red',
  },
}));

const ConsolaSintactica = ({ codigo }) => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <div>
          <div style={{ paddingTop: 100 }}>
            <TextField
              id="outlined-multiline-static"
              className={classes.inputText}
              multiline
              rows={10}
              disabled={true}
              defaultValue={codigo ? codigo : 'No hay errores.'}
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default ConsolaSintactica;
