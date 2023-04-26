import React from 'react'
import {CgClose} from "react-icons/cg"

function Modal({title = "abin" , content , onClose  , visible = false}) {
  return (
    visible ?  <div className='modal-window ' >
        <div className='modal-inner'>
           <div className='modal-header'> 
            <h2> {title} </h2>
            <CgClose onClick={() => onClose?.(false)} color='grey' className='modal-close-icon' />
            </div>

            <div className='modal-content'> 
                {content}
            </div>
        </div>
    </div> : null
  )
}

export default Modal