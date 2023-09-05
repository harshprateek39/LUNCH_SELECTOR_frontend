import React from 'react'
import file from './allo-fullstack-Assignment Dataset .json'
const Header = ({tagfn}) => {
   
  return (
    <div className=' flex  gap-4 py-2 px-5 flex-wrap rounded-md bg-white'>
     <button onClick={()=>{tagfn("all")}} className=' text-slate-800 px-7 py-2 outline-1 outline outline-gray-400  font-medium focus:font-semibold  rounded-full hover:bg-slate-300 focus:bg-blue-100 focus:outline-2'> All</button>
 
     {file.labels.map((label,index)=>
        <button onClick={()=>{tagfn(label.id)}} className=' text-slate-800 px-7 py-2 outline-1 outline outline-gray-400  font-medium focus:font-semibold  rounded-full hover:bg-slate-300 focus:bg-blue-100 focus:outline-2'> {label.label}</button>
     )}
    </div>
    
  )
}

export default Header