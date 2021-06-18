import React, { Component, useEffect, useState } from "react";

import PrivateRoute from './PrivateRoute'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


//import { editColorService, deleteColorService } from '../services/colorServices';
import axiosWithAuth from '../helpers/axiosWithAuth';



const BubblePage = () => {

  useEffect(()=>{
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(res=> {
        setColors(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
  })

  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
  };

  const deleteColor = (colorToDelete) => {
  };

 

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
  
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
