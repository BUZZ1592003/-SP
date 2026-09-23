"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

/* =========================================
   TYPES
========================================= */

type Position = [number, number, number];

type Technology = {
  name: string;
  position: Position;
};

/* =========================================
   TECHNOLOGIES
========================================= */

const technologies: Technology[] = [
  {
    name: "React",
    position: [-2.8, 1.5, 0],
  },
  {
    name: "Next.js",
    position: [0, 2.3, -0.5],
  },
  {
    name: "JavaScript",
    position: [2.8, 1.4, 0],
  },
  {
    name: "PHP",
    position: [-3, -1.2, -0.3],
  },
  {
    name: "Laravel",
    position: [3, -1.2, -0.2],
  },
  {
    name: "Python",
    position: [-1.6, -2.3, 0],
  },
  {
    name: "MySQL",
    position: [1.6, -2.3, 0],
  },
];

/* =========================================
   TECHNOLOGY NODE
========================================= */

type TechNodeProps = {
  name: string;
  position: Position;
};

function TechNode({ name, position }: TechNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    /*
      Small floating movement.

      Each node gets slightly different timing
      because position[0] is added to the sine wave.
    */
    meshRef.current.position.y =
      Math.sin(time * 1.2 + position[0]) * 0.08;

    /*
      Hover scale.
    */
    const targetScale = hovered ? 1.35 : 1;

    const currentScale = meshRef.current.scale.x;

    const newScale = THREE.MathUtils.lerp(
      currentScale,
      targetScale,
      0.08
    );

    meshRef.current.scale.setScalar(newScale);
  });

  return (
    <group position={position}>

      {/* NODE */}
      <mesh
        ref={meshRef}
        onPointerEnter={() => {
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          setHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[0.12, 32, 32]} />

        <meshStandardMaterial
          color={hovered ? "#FFD400" : "#ffffff"}
          emissive={hovered ? "#FFD400" : "#000000"}
          emissiveIntensity={hovered ? 2 : 0}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>

      {/* LABEL */}
      <Html
        center
        position={[0, 0.38, 0]}
        distanceFactor={8}
        style={{
          pointerEvents: "none",
        }}
      >
        <div
          className={`
            whitespace-nowrap
            border
            px-3
            py-1.5
            font-mono
            text-[10px]
            uppercase
            tracking-[0.15em]
            transition-all
            duration-300
            ${
              hovered
                ? "border-[#FFD400] bg-[#FFD400] text-black"
                : "border-neutral-700 bg-[#050505]/80 text-neutral-400"
            }
          `}
        >
          {name}
        </div>
      </Html>

    </group>
  );
}

/* =========================================
   CONNECTION LINE
========================================= */

function Connection({
  start,
  end,
}: {
  start: Position;
  end: Position;
}) {
  return (
    <Line
      points={[start, end]}
      color="#FFD400"
      lineWidth={0.6}
      transparent
      opacity={0.25}
    />
  );
}

/* =========================================
   INTERACTIVE SYSTEM
========================================= */

function InteractiveSystem() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const [coreHovered, setCoreHovered] = useState(false);

  useFrame((state) => {
    if (!groupRef.current || !coreRef.current) return;

    const { x, y } = state.pointer;
    const time = state.clock.elapsedTime;

    /*
      Entire system reacts to cursor movement.
    */
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      y * 0.12,
      0.025
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      x * 0.18,
      0.025
    );

    /*
      Very subtle automatic movement.
    */
    groupRef.current.rotation.z =
      Math.sin(time * 0.15) * 0.025;

    /*
      Core breathing effect.
    */
    const pulse =
      1 + Math.sin(time * 2) * 0.035;

    const targetScale =
      coreHovered ? 1.2 : pulse;

    const newScale = THREE.MathUtils.lerp(
      coreRef.current.scale.x,
      targetScale,
      0.08
    );

    coreRef.current.scale.setScalar(newScale);

    /*
      Orbit ring moves independently.
    */
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.002;
      ringRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>

      {/* CONNECTION LINES */}
      {technologies.map((technology) => (
        <Connection
          key={`line-${technology.name}`}
          start={[0, 0, 0]}
          end={technology.position}
        />
      ))}

      {/* CENTRAL CORE */}
      <mesh
        ref={coreRef}
        onPointerEnter={() => {
          setCoreHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          setCoreHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <icosahedronGeometry args={[0.65, 2]} />

        <meshStandardMaterial
          color="#FFD400"
          emissive="#FFD400"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* CORE LABEL */}
      <Html
        center
        position={[0, -1.15, 0]}
        distanceFactor={8}
        style={{
          pointerEvents: "none",
        }}
      >
        <div className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFD400]">
          Development Core
        </div>
      </Html>

      {/* ORBIT RING */}
      <mesh
        ref={ringRef}
        rotation={[1.15, 0.2, 0]}
      >
        <torusGeometry
          args={[1.15, 0.008, 8, 100]}
        />

        <meshBasicMaterial
          color="#FFD400"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* TECHNOLOGY NODES */}
      {technologies.map((technology) => (
        <TechNode
          key={technology.name}
          name={technology.name}
          position={technology.position}
        />
      ))}

    </group>
  );
}

/* =========================================
   SCENE
========================================= */

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <pointLight
        color="#FFD400"
        intensity={12}
        distance={8}
        position={[0, 0, 3]}
      />

      <directionalLight
        color="#ffffff"
        intensity={1}
        position={[-4, 4, 5]}
      />

      <InteractiveSystem />
    </>
  );
}

/* =========================================
   TECH ORBIT SECTION
========================================= */

export default function TechOrbit() {
  return (
    <section className="relative overflow-hidden border-y border-neutral-800 bg-[#050505]">

      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              #737373 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              #737373 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* TOP INFORMATION */}
      <div className="relative z-10 mx-auto flex max-w-[1600px] items-center justify-between px-6 pt-8 lg:px-12">

        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FFD400]">
          Interactive System / 01
        </p>

        <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600 md:block">
          Move your cursor
        </p>

      </div>

      {/* INTERACTIVE SCENE */}
      <div className="relative h-[520px] sm:h-[620px] lg:h-[720px]">

        {/* BACKGROUND TYPOGRAPHY */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

          <p className="select-none text-center text-[18vw] font-bold uppercase leading-[0.75] tracking-[-0.08em] text-neutral-900 lg:text-[14vw]">
            BUILD
            <br />
            SYSTEMS
          </p>

        </div>

        {/* THREE.JS */}
        <div className="absolute inset-0">
          <Canvas
            camera={{
              position: [0, 0, 7.5],
              fov: 45,
            }}
            gl={{
              alpha: true,
              antialias: true,
            }}
          >
            <Scene />
          </Canvas>
        </div>

      </div>

      {/* BOTTOM INFORMATION */}
      <div className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 gap-6 border-t border-neutral-800 px-6 py-7 md:grid-cols-2 lg:px-12">

        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
          Code / Tools / Ideas / Experiments
        </p>

        <p className="max-w-lg text-sm leading-6 text-neutral-400 md:ml-auto">
          Different technologies become more useful when they
          connect to solve a real problem.
        </p>

      </div>

    </section>
  );
}