import React from 'react'

function BtnStyle(props) {
  
  return (
  <>  <div className='d-flex '>
     <div style={{width:"15px", height:"15px", }} className='bg-primary mt-3 me-1'>
     </div>
     <h3 className='mt-2 mt-md-1'>{props.title}</h3>
     <span className='text-secondary fs-5 mt-2 d-md-block d-none'>{props.jobTitle}</span> 
     </div>
     </>
  )
}

export default BtnStyle
