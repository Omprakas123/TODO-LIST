import React, { useState } from "react";
import Com from "./Com";

const App=()=>{

    const [Items, setItems]= useState([]);
       const [inputlist,setIputList]=useState("");
       const inputEvent =(event) =>{
         setIputList(event.target.value)
       };
       const listofitems = ()=>{
           setItems((oldItems)=>
           {
               return [...oldItems, inputlist];
           });
         setIputList("");
       };
       const deletefn=(val)=>{
        setItems((oldItems)=>{
             return oldItems.filter((arr,ind)=>{
                 return val!==ind;
             });
        });
       };
   
return <>
   <div className="main_div"> 
   <div className="center_div">
     <br/>
     <h1> To Do List</h1>
     <br/>
     <input text="text" placeholder="Add a Items"   value={inputlist} onChange={inputEvent}/>
     <button onClick = {listofitems}> + </button>
      <ol>
       
         {  Items.map((Itemval,index)=>{
              return <Com text={Itemval} id={index} key={index} onSelect={deletefn}/>
        })} 
      </ol>
   </div> 



   </div>


</>

};
export default App;

