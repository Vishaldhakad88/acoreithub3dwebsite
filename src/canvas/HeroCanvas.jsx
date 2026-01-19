import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPhp,
  SiMongodb,
} from "react-icons/si";

const techs = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "AWS", icon: FaAws },
  { name: "PHP", icon: SiPhp },
  { name: "Java", icon: FaJava },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];

/* ================= TECH ICON SPHERE ================= */
function TechIconSphere({ mouse }) {
  const groupRef = useRef();

  const iconPositions = useMemo(() => {
    const arr = [];
    const radius = 1.6;
    const totalIcons = 300;

    for (let i = 0; i < totalIcons; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      const techIndex = i % techs.length;

      arr.push({
        position: [x, y, z],
        tech: techs[techIndex],
      });
    }
    return arr;
  }, []);

  useFrame(() => {
    groupRef.current.rotation.y += 0.002;
    groupRef.current.rotation.x = mouse.current.y * 0.25;
    groupRef.current.rotation.z = mouse.current.x * 0.25;
  });

  return (
    <group ref={groupRef}>
      {iconPositions.map((item, i) => {
        const Icon = item.tech.icon;
        return (
          <Html
            key={i}
            position={item.position}
            center
            style={{
              pointerEvents: "none",
            }}
          >
            <div className="text-cyan-400 opacity-60">
              <Icon size={12} />
            </div>
          </Html>
        );
      })}
    </group>
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

      <TechIconSphere mouse={mouse} />
      <ConnectionArcs />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}