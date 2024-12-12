import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const Model = () => {
  const ref = useRef();
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/personal_computer.glb', (gltf) => {
      ref.current = gltf.scene;
    });
  }, []);
  return <primitive object={ref.current} />;
};

const ThreeGsap = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]} />
      </Canvas>

    </div>
  );
};


export default ThreeGsap;
