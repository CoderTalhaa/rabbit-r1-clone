import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React from "react";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.7}
        luminanceSmoothing={0.8}
        intensity={3}
        // levels={10}
        mipmapBlur
      />
    </EffectComposer>
  );
}
