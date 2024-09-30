import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./DevAvatar";
import { useControls } from "leva";

export const Experience = () => {

  const {animation} = useControls({
    animation: { 
    value: "typing",
    options: ["typing", "salute", "idle", "fallingIdle", "fallingToLanding"]
    }
  });
  return (
    <>
      <OrbitControls />
      <group position-y={-1} >
        <Avatar animation={animation} />

      </group>

      <ambientLight intensity={2} />

    </>
  );
};
