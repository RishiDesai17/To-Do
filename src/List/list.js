import React from 'react';

const List = (props) => {
  return (
    <div>
      <p>{props.occ}</p>
      <p>{props.des}</p>
      <p>{props.deadline}</p>
      <h1>abc</h1>
      <button onClick={props.del}>Done</button>
    </div>
  )
}

export default List;
