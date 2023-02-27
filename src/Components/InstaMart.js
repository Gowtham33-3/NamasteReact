import {useState} from "react"
const Section = ({title,description,isVisible,setIsVisible,item})=> {
    return (
        <div className="border border-black p-2 m-3">
            {isVisible ?(<button onClick={()=>{setIsVisible("")}}>Hide</button>)
            :(<button onClick={()=>{setIsVisible(item)}}>Show</button>)}
            <h3 className="font-bold" >{title}</h3>
            {isVisible && <p >{description}</p>}
        </div>
       
    )
};
const InstaMart = ()=>{
    const [isVisible,setIsVisible]=useState()
    return(
       
        <div className="">
            <Section title={"About Section"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
             isVisible={isVisible==="about"} setIsVisible={setIsVisible} item={"about"}/>
            
            <Section title={"Career Section"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={isVisible==="career"} setIsVisible={setIsVisible} item={"career"}/>
            <Section title={"FAQ Section"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={isVisible==="FAQ"} setIsVisible={setIsVisible} item={"FAQ"}/>
        </div>
    )
    
};
export default InstaMart