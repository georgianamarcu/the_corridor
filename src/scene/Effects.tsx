import {
  EffectComposer,
  LUT,
  Bloom,
  N8AO,
  Scanline,
  Vignette,
} from "@react-three/postprocessing";
import { LUTCubeLoader, BlendFunction } from "postprocessing";
import { useLoader } from "@react-three/fiber";
import { Texture } from "three";

const Effects = () => {
  const texture = useLoader(LUTCubeLoader, "/luts/Retro_red.cube") as Texture;
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.1}
        mipmapBlur
        luminanceSmoothing={0}
        intensity={0.8}
      />
      <LUT lut={texture} />
      <Vignette
        offset={0.6}
        darkness={0.7}
        eskil={false}
        blendFunction={BlendFunction.ALPHA}
      />
      <N8AO
        intensity={2.1}
        aoRadius={0.9}
        aoSamples={6}
        denoiseSamples={4}
        denoiseRadius={9}
        distanceFalloff={2.1}
      />
      <Scanline blendFunction={BlendFunction.OVERLAY} density={1.15} />
    </EffectComposer>
  );
};

export default Effects;
