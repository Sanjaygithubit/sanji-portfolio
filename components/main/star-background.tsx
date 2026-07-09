"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as random from "maath/random";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
function Stars(props: any) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    return random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 });
  }, []);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.02;
    ref.current.rotation.y -= delta * 0.03;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {" "}
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        {" "}
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />{" "}
      </Points>{" "}
    </group>
  );
}
export const StarsCanvas = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {" "}
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        {" "}
        <Suspense fallback={null}>
          {" "}
          <Stars />{" "}
        </Suspense>{" "}
      </Canvas>{" "}
    </div>
  );
};
