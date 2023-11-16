import { useRef, useState } from "react"

type FeatureType = {
    name:string,
    icon:string,
    id:number,
    angle:[x:number,y:number,z:number],
    key:"wheels"|"decks"|"trucks"|"griptapes",
}
type SetCamera=(angle:[x:number,y:number,z:number])=>void

interface FeatureProps{
   setCamera:SetCamera,
   feature:FeatureType,
}
const allFeatures = {
    wheels:[
    {id:1,feature_name:"Attribute 1",img:"",},
    {id:2,feature_name:"Attribute 2 ",img:"",},
    {id:3,feature_name:"Attribute 3",img:"",},
    ], 
    decks:[
    {id:1,feature_name:"Attribute 1",img:"",},
    {id:2,feature_name:"Attribute 2",img:"",},
    {id:3,feature_name:"Attribute 3",img:"",},
    ],
    trucks:[
    {id:1,feature_name:"Attribute 1",img:"",},
    {id:2,feature_name:"Attribute 2",img:"",},
    {id:3,feature_name:"Attribute 3",img:"",},
    ], 
    griptapes:[
    {id:1,feature_name:"Attribute 1",img:"",},
    {id:2,feature_name:"Attribute 2",img:"",},
    {id:3,feature_name:"Attribute 3",img:"",},
    ],
    
}
const Feature = ({feature,setCamera}:FeatureProps)=>{
  const [active,setActive] = useState<string|number|null>(null)
  const handleClick=()=>{
    setCamera(feature.angle)
    collapseRef.current?.classList.toggle("hidden")
  }
  const collapseRef = useRef<HTMLDivElement>(null)

  return (
  <div className="bg-gray-200 rounded-md p-2 mb-2">
     <header className=" flex items-center justify-between">
  <div className="flex">
     <img src="/icons/grip.png" className="w-6 h-6 mr-3" alt="grip icon" />
     <div>
         <p>{feature.name}</p>
         <p className="text-gray-500 text-xs">Pick any of our {feature.name.toLowerCase()}</p>
     </div>
   
  </div>
  <button className="h-8 w-8 flex items-center justify-center bg-white rounded-md" onClick={handleClick}>
   <i className="bi bi-chevron-down"></i>       
  </button>
</header>
    <div ref={collapseRef} className="bg-white p-2 rounded-md mt-3 hidden">
        {/* <p className="text-sm text-gray-300">No Feature Selected</p>
        <button className="text-sm bg-black text-white p-2 mt-2 rounded-lg">Select One</button> */}
        <ul>
           <li  className="px-2 py-4  flex items-center justify-between border-b border-gray-300">
                <div>
                <p>None</p>
                </div>
                <button 
                onClick={()=>setActive(null)}
                className={`rounded-full border ${active===null?"bg-black":""} border-gray-200 h-4 w-4 cursor-pointer`}></button>
            </li>
            {allFeatures[feature.key].map((att)=>
              <li key={`${feature.key}-${att.id}`} className="px-2 py-4  flex items-center justify-between border-b border-gray-300">
                <div>
                <p>{att.feature_name}</p>
                <button className="px-3 py-1 rounded-lg text-sm bg-black text-white">See Preview</button>
                </div>
                <button 
                onClick={()=>setActive(att.id)}
                className={`rounded-full border ${active==att.id?"bg-black":""} border-gray-200 h-4 w-4 cursor-pointer`}></button>
            </li>)}
        </ul>
    </div>
 </div>
)
}
export default function Customizer({setCamera}:{setCamera:SetCamera}){
    const features:FeatureType[]= [
        {name:"Skate Decks",icon:"",id:1,angle:[0,0,0],key:"decks"},
        {name:"Skate Wheels",icon:"",id:1,angle:[0,1.5,0],key:"wheels"},
        {name:"Skate Trucks",icon:"",id:1,angle:[1.3,6.3,0],key:"trucks"},
        {name:"Skate GripTape",icon:"",id:1,angle:[0,3,0],key:"griptapes"},
    ]
    const [currentWheel,setCurrentWheel] = useState<string|number|null>(null)
    const [currentTruck,setCurrentTruck] = useState<string|number|null>(null)
    const [currentDeck,setCurrentDeck] = useState<string|number|null>(null)
    const [currentGriptape,setCurrentGriptape] = useState<string|number|null>(null)

    return (
        <div className="bg-white md:h-screen overflow-y-auto p-4">
          <p className="text-2xl font-semibold text-center">Customize Your Soccer Ball</p>
        
        </div>
    )
}