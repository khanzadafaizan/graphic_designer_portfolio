import React from "react";
import { Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const SocialData = (props) => {
  const handleClick = () => {
    props.handleImageClick(props.index);
  };
  return (
    <Card style={{ width: "26rem" }} className='border-0'>
    <NavLink to={`/imageSocialCarousel/${props.item.id}`} onClick={handleClick}>
      <Card.Img src={props.item.img} style={{width:"100%", height:"18rem"}}/>
    </NavLink>
  </Card>
  )
}

export default SocialData
