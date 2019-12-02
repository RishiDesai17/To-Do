import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Item = (props) => {
  return (
    <div style={{paddingBottom: 70, paddingTop: 60}}>
    <Grid container>
      <Grid item xs={3}>
        <TextField label="Occasion" variant="outlined" name="occ" onChange={props.submit}/>
      </Grid>
      <Grid item xs={3}>
        <TextField label="Description" variant="outlined" name="des" onChange={props.submit}/>
      </Grid>
      <Grid item xs={3}>
        <TextField label="Deadline" variant="outlined" name="deadline" onChange={props.submit}/>
      </Grid>
      <Grid item xs={3}>
        <button type="submit" onClick={props.submit}>SUBMIT!</button>
      </Grid>
    </Grid>
    </div>
  // <div>
  //   <p>Description:</p>
  //   <input name="des" type="text" onChange={props.submit}/>
  //   <p>Occasion:</p>
  //   <input name="occ" type="text" onChange={props.submit}/>
  //   <p>Deadline:</p>
  //   <input name="deadline" type="text" onChange={props.submit}/>
  //   <button type="submit" onClick={props.submit}>Submit!</button>
  // </div>
  )
}

export default Item;
