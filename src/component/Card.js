import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Card = ({data ,array, arrayfn}) => {
  const dispatch=useDispatch();
 const activeId= useSelector(state => state.userReducer.activeId)
  
  const addRmfn=(id)=>{
    
    if(!array.includes(id)){
      dispatch({type:'ADD_CART',payload:{id:activeId,cart:id}})
     
    }
    else{
      dispatch({type:'REMOVE_CART',payload:{id:activeId,cart:id}})
    }
    
  }
  const [selectedDrink,setSelectedDrink]=useState(0);
  const[selected ,setSelected]=useState(false);

  return (
    <>
    <div className=' grid lg:grid-flow-col lg:grid-cols-3 grid-flow-row p-4 gap-4'>
        <div className=' lg:col-span-1 w-full  justify-end lg:h-52   '>
            <img className=' lg:h-40 w-full  aspect-video mx-auto   object-cover' src={data.img} alt="" />
        </div>
        <div className=' col-span-2  flex flex-col items-start gap-3'>
         <h1 className=' text-slate-500 font-medium text-sm'>{data.title}</h1>
         <h2 className=' text-slate-700 font-semibold'>{data.detail} </h2>
         <div className=' flex flex-col items-start'>
         <p className=' text-slate-600 text-sm font-semibold'> <span className=' text-slate-700 font-bold text-base'> Starter </span>{data.starter}</p>
         <p className=' text-slate-600 text-sm font-semibold'> <span className=' text-slate-700 font-bold text-base'> Desert </span>{data.desert}</p>
         <p className=' text-slate-600 text-sm font-semibold'> <span className=' text-slate-700 font-bold text-base'> Selected drink </span>{data.drinks[selectedDrink].title}</p></div>
        <div className=' flex justify-between  w-full '>
        <div className=' flex gap-3 py-1'>
        {data.drinks.map((drink,index)=><img className=' aspect-square h-12 cursor-pointer outline hover:shadow-lg hover:outline-slate-700 focus:outline-2  focus:outline-slate-700 outline-slate-300 outline-1' src='https://w7.pngwing.com/pngs/555/735/png-transparent-red-cocktail-red-drink-cocktail-thumbnail.png' onClick={ ()=>{
          setSelectedDrink(index) 
        }}></img>)}
        </div>
        <div className=' flex flex-col items-start gap-1'> 
        <h1 className=' text-sm font-semibold' > {data.price} €</h1>
        <button className=' px-4 py-2 rounded-sm outline outline-1 text-xs font-semibold hover:bg-slate-300 ' onClick={()=> addRmfn(data.id)}>{!array.includes(data.id)?"select":"remove"}</button>
        </div>
        </div>
        
          </div>
          
    </div>
    <hr className=' w-5/6 mx-auto bg-slate-300 h-1 rounded-lg my-3 '></hr>
    </>
  )
}

export default Card