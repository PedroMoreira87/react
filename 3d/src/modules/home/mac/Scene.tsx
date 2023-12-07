import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera, Stage} from "@react-three/drei";
import Mac from "./Mac.tsx"

export const Scene = () => {
  return (
    <Canvas resize={{scroll: false}}>
      <Stage environment={"city"}>
        <PerspectiveCamera makeDefault fov={10} position={[0.55, 0, 1.8]}/>
        <OrbitControls target={[0, 0, 0]} enableZoom={false} enableRotate={false}/>
        <Mac/>
      </Stage>
    </Canvas>
  )
}
