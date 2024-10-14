import React, { Suspense } from "react";
import Scene from "../../components/infopage/Scene";
import Ovarlay from "@/components/infopage/Ovarlay";

export default function page() {
  return (
    <main>
      <Ovarlay />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </main>
  );
}
