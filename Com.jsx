import react from "react";

const Com = (prom)=>
{
    return(
    <>
       <div className="todo_style">
           <i className="fa-times" aria-hidden="true" onClick={()=>{
                 prom.onSelect(prom.id);
           }}/>
        <li>{prom.text}</li>
        </div>
    </>
    );
}
export default Com;