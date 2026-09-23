"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

function InteractiveObject() {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const wireframeMaterialRef = useRef<THREE.MeshBasicMaterial>(null);

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (!groupRef.current || !meshRef.current) return;

    const { x, y } = state.pointer;

    // Mouse-based rotation
    const targetRotationX = y * 0.35;
    const targetRotationY = x * 0.35;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.04
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.04
    );

    // Slow continuous rotation
    meshRef.current.rotation.z += 0.0015;

    // Wireframe moves independently
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x += 0.001;
      wireframeRef.current.rotation.y += 0.0015;
      wireframeRef.current.rotation.z -= 0.0005;
    }

    // Wireframe reacts to hover
    if (wireframeMaterialRef.current) {
      const targetOpacity = hovered ? 0.8 : 0.3;

      wireframeMaterialRef.current.opacity = THREE.MathUtils.lerp(
        wireframeMaterialRef.current.opacity,
        targetOpacity,
        0.08
      );
    }

    // Scale interaction
    let targetScale = 1;

    if (clicked) {
      targetScale = 1.18;
    } else if (hovered) {
      targetScale = 1.08;
    }

    groupRef.current.scale.x = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      0.08
    );

    groupRef.current.scale.y = THREE.MathUtils.lerp(
      groupRef.current.scale.y,
      targetScale,
      0.08
    );

    groupRef.current.scale.z = THREE.MathUtils.lerp(
      groupRef.current.scale.z,
      targetScale,
      0.08
    );
  });

  return (
    <group ref={groupRef}>

      {/* SOLID CORE */}
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
        onClick={() => {
          setClicked(true);

          setTimeout(() => {
            setClicked(false);
          }, 200);
        }}
      >
        <icosahedronGeometry args={[1.15, 2]} />

        <meshStandardMaterial
          color="#080808"
          roughness={0.18}
          metalness={0.95}
        />
      </mesh>

      {/* OUTER WIREFRAME */}
      <mesh
        ref={wireframeRef}
        scale={1.22}
      >
        <icosahedronGeometry args={[1.15, 2]} />

        <meshBasicMaterial
          ref={wireframeMaterialRef}
          color="#FFD400"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

    </group>
  );
}

function Scene() {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (!lightRef.current) return;

    const { x, y } = state.pointer;

    const targetX = x * 2.5;
    const targetY = y * 2.5;

    lightRef.current.position.x = THREE.MathUtils.lerp(
      lightRef.current.position.x,
      targetX,
      0.04
    );

    lightRef.current.position.y = THREE.MathUtils.lerp(
      lightRef.current.position.y,
      targetY,
      0.04
    );
  });

  return (
    <>
      <ambientLight intensity={0.25} />

      {/* YELLOW INTERACTIVE LIGHT */}
      <pointLight
        ref={lightRef}
        color="#FFD400"
        intensity={18}
        distance={7}
        decay={2}
        position={[2, 2, 3]}
      />

      {/* WHITE EDGE LIGHT */}
      <directionalLight
        color="#ffffff"
        position={[-3, 2, 4]}
        intensity={1.5}
      />

      {/* SUBTLE YELLOW BACK LIGHT */}
      <pointLight
        color="#FFD400"
        position={[-3, -2, -2]}
        intensity={5}
        distance={6}
      />

      <InteractiveObject />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4.5],
        fov: 42,
      }}
      gl={{
        alpha: true,
        antialias: true,
      }}
    >
      <Scene />
    </Canvas>
  );
}