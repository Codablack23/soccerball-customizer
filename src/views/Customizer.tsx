import { Canvas,} from "@react-three/fiber"
import "../styles/customizer.scss"
import Customizer from "../components/Customizer"
import { Suspense, useState,  } from "react"
import { Vector3 } from "three"
import { OrbitControls, Stage } from "@react-three/drei/web"
import { SoccerBallModel } from "../components/Models/Soccer_ball"

type Angles = [x:number,y:number,z:number]

const Loader = ()=>{
  return (
    <div className="h-80 md:h-screen flex items-center justify-center">
      <div className="text-center">
       <p>Loading Model....</p>
      </div>
    </div>
  )
}
export default function CustomizerView(){
    const [angle,setAngle] = useState<Angles>([0,0,0])
   
    return (
        <div className="customizer-container md:h-screen overflow-y-auto">
          <div className="grid md:grid-cols-3">
            <div className="canvas-container h-80 md:h-screen md:col-span-2">
            <Suspense fallback={<Loader/>}>
            <Canvas>
                <OrbitControls/>
                <Stage adjustCamera 
                intensity={0.5} 
                scale={new Vector3(0.1,0.10,0.10)} 
                shadows="contact" 
                environment={{files:"/env/stadium.hdr",background:true}}>
                  <SoccerBallModel scale={[0.03,0.03,0.03]}/>
                </Stage> 
            </Canvas>
            </Suspense>
            
            </div>
            <div className="customizer-sidebar md:col-span-1">
                <Customizer setCamera={(angle)=>{setAngle(angle)}}/>
            </div>
          </div>
        </div>
    )
}