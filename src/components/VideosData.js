import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from 'react-player'
function VideosData(props) {
  return (
 <div key={props.index} className="g-dark">
<ReactPlayer controls url={props.item} width={300} height={300}/>
</div>
  )
}

export default VideosData
