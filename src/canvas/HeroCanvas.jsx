import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ================= DOTTED GLOBE WITH PULSE ================= */
function DottedGlobe({ mouse }) {
  const pointsRef = useRef();
  const materialRef = useRef();

  const dots = useMemo(() => {
    const arr = [];
    const radius = 1.6;

    for (let i = 0; i < 1800; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      arr.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }
    return new Float32Array(arr);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // rotation + mouse tilt
    pointsRef.current.rotation.y += 0.002;
    pointsRef.current.rotation.x = mouse.current.y * 0.25;
    pointsRef.current.rotation.z = mouse.current.x * 0.25;

    // pulse animation
    materialRef.current.size = 0.028 + Math.sin(t * 2) * 0.01;
    materialRef.current.opacity = 0.6 + Math.sin(t * 2) * 0.25;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={dots}
          count={dots.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        ref={materialRef}
        color="#38bdf8"
        transparent
        sizeAttenuation
      />
    </points>
  );
}

/* ================= CONNECTION ARCS ================= */
function ConnectionArcs() {
  const groupRef = useRef();

  const curves = useMemo(() => {
    const radius = 1.6;
    const list = [];

    const randomPoint = () => {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      return new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    for (let i = 0; i < 10; i++) {
      const start = randomPoint();
      const end = randomPoint();
      const mid = start.clone().add(end).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(radius * 1.4);

      list.push(new THREE.QuadraticBezierCurve3(start, mid, end));
    }
    return list;
  }, []);

  useFrame(() => {
    groupRef.current.rotation.y += 0.0015;
  });

  return (
    <group ref={groupRef}>
      {curves.map((curve, i) => {
        const points = curve.getPoints(50);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#60a5fa"
              transparent
              opacity={0.6}
            />
          </line>
        );
      })}
    </group>
  );
}

/* ================= MAIN CANVAS ================= */
export default function HeroCanvas({ mouse }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />

      <DottedGlobe mouse={mouse} />
      <ConnectionArcs />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}
