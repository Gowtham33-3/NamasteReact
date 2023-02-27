import { useState } from "react";
const Contact= ()=> {
    const [num,setNum]=useState(0)
    
    function add(){
        setNum(num+1);
    }

    function sub(){
        setNum(num-1);
    }
    

    return(
        <>
         <button onClick={()=>sub()}>-</button>
         <h1>{num}</h1>
         <button  on onClick={()=>add()}>+</button>
        <h1>contact us :</h1>
        <h2>gowthamkarukola@gmail.com</h2>
        <h2>cell no: 9381260682</h2>

        </>
    )
}

export default Contact