"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three-stdlib";

function page() {

  const [gltf, setGltf] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    const loader = new GLTFLoader();
    loader.load("/fog/fog-group.gltf", (gltf) => {
      setGltf(gltf);
    },
    undefined,
    (error) => {
      console.error("An error happened", error);
      setError(error);
    }
  );

  }, []);

  return (
    <div className="bg-black h-[100vh]">
      <Canvas>
        <OrbitControls enableRotate autoRotate />
        <ambientLight intensity={2} />
        <directionalLight intensity={4} position={[-5, 5, 0]} />
        {gltf && gltf.scene && <primitive object={gltf.scene} scale={2} />}
      </Canvas>
    </div>
  );
}

export default page;