import useModelStore from "@/store/useStore";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import React from "react";

export default function Effects() {
  const { light } = useModelStore();
  return (
    <>
      {light && (
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.3}
            intensity={3}
            levels={3}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </>
  );
}
