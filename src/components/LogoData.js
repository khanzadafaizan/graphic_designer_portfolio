// LogoData.js

import React from "react";
import { Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function LogoData(props) {

  const handleClick = () => {
    props.handleImageClick(props.index); 
  };

  return (
    <Card style={{ width: "16rem" }} className='border-0'>
      <NavLink to={`/imageCarousel/${props.item.id}`} onClick={handleClick}>
        <Card.Img src={props.item.img} style={{width:"16rem", height:"14rem"}}/>
      </NavLink>
    </Card>
  );
}

export default LogoData;
