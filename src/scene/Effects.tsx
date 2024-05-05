import { EffectComposer, LUT, Bloom } from "@react-three/postprocessing";
import { LUTCubeLoader } from "postprocessing";
import { useLoader } from "@react-three/fiber";
import { Texture } from "three";

const Effects = () => {
  const texture = useLoader(LUTCubeLoader, "/luts/Serenity.CUBE") as Texture;
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.1}
        mipmapBlur
        luminanceSmoothing={0}
        intensity={0.8}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
};

export default Effects;
