import { ContactShadows, Environment, OrbitControls, RoundedBox, Sky } from "@react-three/drei";
import { Avatar } from "./DevAvatar";
import { useControls } from "leva";

export const Experience = () => {

  const { animation } = useControls({
    animation: {
      value: "typing",
      options: ["typing", "salute", "idle", "falling", "fallingToLanding"]
    }
  });
  return (
    <>
      <OrbitControls />
      <Sky sunPosition={[100, -110, 11]} />
      <Environment preset="sunset" />
      <group position-y={-1} rotation={[0, 0, 0]}>
      <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Avatar animation={animation} />
   
     {/*  <mesh scale={[0.8,0.5,0.8 ]} position-y={0.25}>
        <boxGeometry  />
        <meshStandardMaterial color="white" />
      </mesh> */}
      {animation === "typing" && (
       <mesh scale={[0.7, 0.56, 0.7]} position-y={0.25}>
       <RoundedBox args={[1, 1, 1]} radius={0.15} smoothness={4}>
         <meshStandardMaterial color="purple" />
       </RoundedBox>
     </mesh>
      )

      }
     
      <mesh
      receiveShadow
      scale={5}
      rotation-x={-Math.PI * 0.5}
      position-y={-0.0001}
      >
        <planeGeometry />
        <meshStandardMaterial color="white" />
      </mesh>

      </group>

    </>
  );
};
