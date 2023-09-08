import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {RiArrowDropDownLine,RiArrowDropUpLine,RiAddLine} from 'react-icons/ri';

const User = () => {
  const users= useSelector(state => state.userReducer.totaluser)
  const totalItems= useSelector(state => state.TotalItemReducer.netItem);
  const [sum,setSum]=useState(0);

 
    let Tsum=totalItems.reduce(( acc, item)=>{ return acc+ item.price} , 0);


  const dispatch=useDispatch();
 const addUserfn=()=>{
    setAddUser(!addUser);
    setName('');
    const user={
      name:name,
      id:Date.now(),
      cart:[]
    }
     dispatch({type:'ADD_USER',payload:user})
    
 }
   const [selectedUser, setSelectedUser] = useState(users[0]);
   const [expanded, setExpanded] = useState(false);
   const[ addUser ,setAddUser]=useState(false)
   const [name, setName] = useState('John');
    
  return (
    <div className='  lg:col-span-2 flex  items-start flex-col'>
    <h1 className=' font-bold py-3 text-xl ' > Select User :</h1>
    <div className=' flex flex-col w-full'>
      <div onClick={()=>{setExpanded(!expanded)}} className=' bg-white  border-l-4 border-blue-700  cursor-pointer flex justify-between items-center px-3 outline outline-1 text-blue-900 outline-blue-500 rounded-sm py-3 font-bold text-lg'>
        <h1>{selectedUser.name}</h1>
        {expanded?<RiArrowDropUpLine/>:<RiArrowDropDownLine/>}</div>
        {expanded?<div className=' flex flex-col  w-full bg-white rounded-sm  '>
          {users.map((user,index)=><div onClick={()=>{setSelectedUser(user);setExpanded(false); dispatch({type:'SET_ACTIVE',payload:user.id })}} className='outline flex justify-between items-center text-blue-900 outline-blue-500 outline-1 rounded-sm py-3 font-semibold text-lg px-3 cursor-pointer hover:bg-gray-100'>{user.name}
          <h2 className=' text-sm text-slate-600'>Select Meal</h2></div>)}
        </div>:<></> }
        <button onClick={()=> setAddUser(!addUser)} className=' flex justify-end items-center py-2 text-sm text-blue-600 font-semibold' > <h1>Add User </h1>{" "} <RiAddLine/> </button>
       { addUser? <div className=' w-full flex flex-col gap-2'>
        <input className=' outline rounded-md py-3 px-4 text-blue-900 font-semibold w-full'
        type="text"
        placeholder="Enter a name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUserfn} className=' self-end bg-white outline outline-1 px-3 py-2 rounded-sm hover:shadow-lg hover:bg-slate-200 font-bold text-xs'> Done</button>
      </div>:<></>}
      
    </div>
  <div className=' flex w-full justify-end items-center gap-2'>
  <h1 className=' font-medium text-sm '>Total Price for All :</h1>
  <h2 className='font-bold text-lg'>{ parseFloat(Tsum.toFixed(2))}{" "}€</h2>
  </div>

    </div>
  )
}

export default User