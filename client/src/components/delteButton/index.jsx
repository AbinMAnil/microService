import React, { useState } from 'react'
import {RiDeleteBin7Line} from "react-icons/ri"
import {AiOutlineCheckCircle , AiOutlineCloseCircle} from "react-icons/ai"

function DeleteButton( { onDelete }) {

    const [visible , setVisible] = useState(false);
  return (
    <div className="deleteButtonDiv">
        <RiDeleteBin7Line  className="icon" onClick={() => setVisible(true)}/>

       { visible && <div onMouseLeave={() => setVisible(false)} className='deleteConfirmModal'>
              Confirm
                <div  className='deleteButtonActions'>
                    <AiOutlineCheckCircle color='green' onClick={() => onDelete?.("suck")} style={{marginRight : "7px" , fontSize : "20px" , cursor : "pointer"}} />
                    <AiOutlineCloseCircle color="red" onClick={() => setVisible(false)}  style={{ fontSize : "20px" , cursor : "pointer"}} />
                </div>
        </div>}
    </div>
  )
}

export default DeleteButton