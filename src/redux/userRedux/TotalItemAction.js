export const removeItem= (items, id)=>(dispatch)=>{

    const index= items.findIndex((item)=> item.id===id);
    items.splice(index,1);
    dispatch({
        type: "REMOVE_ITEM",
        payload: items,
      });

}