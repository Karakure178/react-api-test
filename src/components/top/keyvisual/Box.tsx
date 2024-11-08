import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Box = (props) => {
  const ref = useRef({} as Mesh);
  useFrame(() => (ref.current.rotation.x += 0.01));
  return (
    <mesh ref={ref} position={props.position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={props.color} />
    </mesh>
  );
};

export default Box;
