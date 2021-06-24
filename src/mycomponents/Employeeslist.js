import React from 'react';

const Employeeslist= (props) => {
  let age = props.age >=0 ? props.age : "NA";
  if(props.children){
    return (
      <li>
      <span>  name: {props.children} | age: {age}</span>
      <input onChange={props.changeEvent} value={props.children}/>
      <button onClick={props.delEvent}>Delete</button>
      </li>
    )
  } else {
    return(<li>Invalid Entry</li>)
  }
}

export default Employeeslist;
