import React from "react";
import './Landing.css'
import Banner from '../../assets/banner2.jpg'
import ItemListContainer from "../ItemListContainer/ItemListContainer";


const Landing = () => {
  return (
    <div className="vh-100">
    <ItemListContainer name="Bienvenidos a VOLTURE"/>
      <img className="img-fluid" src={Banner} alt="banner"/>
      
    </div>
  );
};

export default Landing;
