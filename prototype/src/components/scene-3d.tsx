"use client";

import { Suspense, useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";
import * as THREE from "three";

type ProgressRef = RefObject<number>;

const MODEL_URL = "/models/drill.glb";

function HeroModel({ progressRef }: { progressRef: ProgressRef }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  // Clone + normalize scale/center; keep the model's own PBR materials
  const model = useMemo(() => {
    const clone = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 2.0 / maxDim;
    clone.scale.setScalar(scale);
    const center = box.getCenter(new THREE.Vector3()).multiplyScalar(scale);
    clone.position.sub(center);

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).castShadow = true;
        (child as THREE.Mesh).receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    const p = progressRef.current ?? 0;

    // Continuous slow rotation
    groupRef.current.rotation.y += delta * 0.25;

    // Chapter-driven pose targets
    // Chapter progress zones (matching hero-scroll timeline):
    //   intro:   0.00 – 0.15
    //   ch0:     0.15 – 0.35
    //   ch1:     0.35 – 0.55
    //   ch2:     0.55 – 0.75
    //   ch3:     0.75 – 1.00
    // Text owns the left column once chapters kick in — park the model right
    let targetX = 0;
    let targetY = 0;
    let targetRotX = 0;
    let targetZ = 0;

    if (p < 0.15) {
      targetY = 0;
      targetRotX = 0.05;
    } else if (p < 0.35) {
      targetX = 0.9;
      targetY = -0.05;
      targetRotX = 0.1;
      targetZ = 0.1;
    } else if (p < 0.55) {
      targetX = 0.9;
      targetY = 0.05;
      targetRotX = 0.3;
      targetZ = 0.25;
    } else if (p < 0.75) {
      targetX = 0.9;
      targetY = 0.15;
      targetRotX = -0.12;
      targetZ = 0.15;
    } else {
      targetX = 0.9;
      targetY = 0;
      targetRotX = 0.05;
      targetZ = 0.3;
    }

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.06
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetY,
      0.06
    );
    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      targetZ,
      0.06
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.06
    );
  });

  // Animate the wrapper group; the child keeps its centering offset intact
  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);

// Contact shadow / soft ground plane
function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]} receiveShadow>
      <circleGeometry args={[6, 64]} />
      <shadowMaterial opacity={0.12} />
    </mesh>
  );
}

function LoaderOverlay() {
  const { active, progress } = useProgress();
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 flex items-end justify-center pb-24 transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="font-mono text-[10px] tracking-[0.32em] text-axis-mid">
          LOADING ASSET — {Math.round(progress)}%
        </div>
        <div className="h-px w-40 overflow-hidden bg-axis-line">
          <div
            className="h-full bg-axis-navy transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export function Scene3D({ progressRef }: { progressRef: ProgressRef }) {
  return (
    <div className="relative h-full w-full">
      <Canvas
        camera={{ position: [0, 0.4, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
        shadows
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* Rim light to separate the model from the pale background */}
        <directionalLight position={[-6, 3, -5]} intensity={1.1} color="#bfdbfe" />
        <hemisphereLight args={["#ffffff", "#c5cfe0", 0.5]} />

        <Suspense fallback={null}>
          <HeroModel progressRef={progressRef} />
          <GroundPlane />
        </Suspense>
      </Canvas>
      <LoaderOverlay />
    </div>
  );
}
