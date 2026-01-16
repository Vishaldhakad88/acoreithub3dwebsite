import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RotatingShape({ type }) {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.01;
    ref.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={ref}>
      {type === "sphere" && <sphereGeometry args={[0.6, 32, 32]} />}
      {type === "cube" && <boxGeometry args={[0.9, 0.9, 0.9]} />}
      {type === "torus" && <torusGeometry args={[0.55, 0.2, 16, 32]} />}

      <meshStandardMaterial
        color="#38bdf8"
        metalness={0.7}
        roughness={0.25}
        emissive="#38bdf8"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

export default function ServiceIcon3D({ type = "sphere" }) {
  return (
    <div className="w-14 h-14">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <RotatingShape type={type} />
      </Canvas>
    </div>
  );
}
