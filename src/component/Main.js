import React, { useEffect, useState } from 'react'
import Header from './Header'
import file from "./allo-fullstack-Assignment Dataset .json"
import Card from './Card'
import { useSelector } from 'react-redux'
const Main = () => {
  const [tag, setTag] = useState('all');
  const [selectedArray, setSelectedArray]=useState([])
  const selectedUser= useSelector(state => state.userReducer.totaluser.filter((item)=>item.id===state.userReducer.activeId))

  
    const [page,setPage]=React.useState(1)
    const [offset,setOffset]=React.useState(0)
    const [arr,setArr]= useState(file.meals)
    useEffect(() => {
      setPage(1)
      if(tag==='all'){
        setArr(file.meals)
      }
      else{
        setArr(file.meals.filter((meal)=>meal.labels.includes(tag)))
      }
    }, [tag])
    const pageCount= Math.ceil(arr.length/3)
    const lastindex= page*3;
    const firstindex= lastindex-3;
    const array=new Array(pageCount).fill(1);
    
  return (
    <div className='  md:col-span-3  flex flex-col gap-2 justify-center  '>
    
        <Header tagfn={setTag}/>
      <div className=' bg-white rounded-sm  '>  {arr.slice(firstindex,lastindex).map((meal,index)=> <Card data={meal} array={selectedUser[0].cart} arrayfn={setSelectedArray} /> )}</div>
      <div className=' flex gap-3 justify-end '>

        {array.map((item,index)=><button className=' outline outline-2 px-3 py-1 rounded-md focus:bg-blue-100 outline-gray-400 focus:outline-gray-500 ' onClick={()=>setPage(index+1)}>{index+1} </button>)}
      </div>
    </div>
  )
}

export default Main;