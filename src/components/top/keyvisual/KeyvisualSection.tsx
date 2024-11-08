import { useAPI } from "./../../context/dataContext";
import { useEffect, useRef, useState } from "react";
import { useFrame, Canvas, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { CameraControls, Environment, SoftShadows } from "@react-three/drei";
import Box from "./Box";

function KeyvisualSection() {
  const { users } = useAPI();
  const type = users.type;
  let colors = "hotpink"; // かっこいいお姉さん

  if (type === "明るい少年") {
    colors = "orange";
  } else if (type === "ちょっと疲れたおじさん") {
    colors = "black";
  } else if (type === "内気な少女") {
    colors = "white";
  }

  return (
    <section>
      <div className="relative w-full min-h-96 overflow-hidden flex">
        <Canvas
          camera={{ fov: 70, near: 0.1, far: 2000 }}
          style={{ width: "100vw", height: "500px" }}
        >
          <color args={["#5bbee5"]} attach={"background"} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 20]} />
          <Box position={[-2.4, 0, 0]} color={colors} />
          <Box position={[0, 0, 0]} color={colors} />
          <Box position={[2.4, 0, 0]} color={colors} />
        </Canvas>
      </div>
    </section>
  );
}

export default KeyvisualSection;
