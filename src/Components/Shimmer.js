
const Shimmer= ()=> {
    return (
      <div className="flex flex-wrap mx-auto max-w-6xl ">
       {
        Array(10).fill("").map(e=>  
        <div className="w-56 h-72 bg-slate-300 p-3 m-3 shadow-lg rounded-sm hover:bg-slate-100/75" >
         
        </div>)
       }
      </div>
     
    )
}

export default Shimmer;