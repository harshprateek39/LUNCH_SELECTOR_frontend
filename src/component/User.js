import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri';

const User = () => {
  const users= useSelector(state => state.userReducer.totaluser)
 
   const [selectedUser, setSelectedUser] = useState(users[0]);
   const [expanded, setExpanded] = useState(false);
    
  return (
    <div className='  lg:col-span-2 flex  items-start flex-col'>
    <h1 onClick={ ()=>console.log(users)}> Select User</h1>
    <div className=' flex flex-col w-full'>
      <div className=' flex justify-between items-center px-3 outline outline-1 rounded-sm'>
        <h1>{selectedUser.name}</h1>
        {expanded?<RiArrowDropUpLine/>:<RiArrowDropDownLine/>}
        
      </div>
    </div>


    </div>
  )
}

export default User