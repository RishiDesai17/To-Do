import React from 'react';

const Item = (props) => {
  return (
  <div>
    <p>Description:</p>
    <input name="des" type="text" onChange={props.submit}/>
    <p>Occasion:</p>
    <input name="occ" type="text" onChange={props.submit}/>
    <p>Deadline:</p>
    <input name="deadline" type="text" onChange={props.submit}/>
    <button type="submit" onClick={props.submit}>Submit!</button>
  </div>
  )
}

export default Item;
