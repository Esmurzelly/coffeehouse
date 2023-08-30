import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { Model } from '@/assets/models/Girl'

const GirlModel = () => {
  return (
    <Canvas camera={{position: [1, 3, 10], zoom: 3}}>
        <hemisphereLight intensity={1} />
        <spotLight 
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
        />

        <Suspense fallback={null}>
            <Model />
        </Suspense>
    </Canvas>
  )
}

export default GirlModel