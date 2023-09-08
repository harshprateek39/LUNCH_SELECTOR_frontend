import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/userRedux/TotalItemAction';
const Card = ({data ,array, arrayfn}) => {
  
  const meal=data;
  const [jucieprice, setJucieprice] = useState(0);
  const dispatch=useDispatch();
 const activeId= useSelector(state => state.userReducer.activeId)
  const totalitem = useSelector(state => state.TotalItemReducer.netItem)
  const addRmfn=(id,item)=>{
    
    if(!array.includes(id)){
      dispatch({type:'ADD_CART',payload:{id:activeId,cart:id}})
      dispatch({type:'ADD_ITEM',payload:{...item ,price:item.price+ jucieprice}})
     
    }
    else{
      dispatch({type:'REMOVE_CART',payload:{id:activeId,cart:id}})
      dispatch(removeItem(totalitem,id))
    }
    
  }
  const [selectedDrink,setSelectedDrink]=useState(-1);
  const[selected ,setSelected]=useState(false);
  useEffect(()=>{
    if(array.includes(meal.id)){ 
      dispatch(removeItem(totalitem,meal.id));
      dispatch({type:'ADD_ITEM',payload:{...meal ,price:meal.price+ jucieprice}})
    }
  },[jucieprice])

  return (
    <>
    <div className=' grid md:grid-flow-col md:grid-cols-3 grid-flow-row p-4 gap-4'>
        <div className=' md:col-span-1 w-full  justify-end md:h-52  '>
            <img className=' md:h-40   aspect-video mx-auto   object-cover' src={data.img} alt=""/>
        </div>
        <div className=' md:col-span-2  flex flex-col items-start gap-3'>
         <h1 className=' text-slate-500 font-medium text-sm'>{data.title}</h1>
         <h2 className=' text-slate-700 font-semibold'>{data.detail} </h2>
         <div className=' flex flex-col items-start'>
         <p className=' text-slate-600 text-sm font-semibold'> <span className=' text-slate-700 font-bold text-base'> Starter </span>{data.starter}</p>
         <p className=' text-slate-600 text-sm font-semibold'> <span className=' text-slate-700 font-bold text-base'> Desert </span>{data.desert}</p>
         <p className=' text-slate-600 text-sm font-semibold'> <span className=' text-slate-700 font-bold text-base'> Selected drink : </span>{selectedDrink!==-1?data.drinks[selectedDrink].title:"none"}</p></div>
        <div className=' flex justify-between  w-full '>
        <div className=' flex gap-3 py-1'>
        {data.drinks.map((drink,index)=><img className=' aspect-square h-12 cursor-pointer outline hover:shadow-lg hover:outline-slate-700 focus:outline-2  focus:outline-slate-700 outline-slate-300 outline-1' src='https://w7.pngwing.com/pngs/555/735/png-transparent-red-cocktail-red-drink-cocktail-thumbnail.png' onClick={ ()=>{
          if(index===selectedDrink){
            setSelectedDrink(-1) ;
          setJucieprice(0);
          }
          else{setSelectedDrink(index) ;
          setJucieprice(drink.price);}
          
          
          
          
        }}></img>)}
        </div>
        <div className=' flex flex-col items-start gap-1'> 
        <h1 className=' text-sm font-semibold' > {data.price + jucieprice} €</h1>
        <button className=' px-4 py-2 rounded-sm outline outline-1 text-xs font-semibold hover:bg-slate-300 ' onClick={()=> addRmfn(data.id,data)}>{!array.includes(data.id)?"select":"remove"}</button>
        </div>
        </div>
        
          </div>
          
    </div>
    <hr className=' w-5/6 mx-auto bg-slate-300 h-1 rounded-lg my-3 '></hr>
    </>
  )
}

export default Card