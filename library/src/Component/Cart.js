
import React from "react";
import Cards from "./Cards";
import list from "./data";


const Cart=()=>{
     return(
        <section>
{ list.map((item)=>(
<Cards key={item.id}item={item}/>
    ))}
        </section>
     );
     };
     export default Cart;
    //  amazon

