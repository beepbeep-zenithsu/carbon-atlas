import { useLocation } from 'react-router-dom';
import AuroraLayer from './AuroraLayer';
import AmbientField from './AmbientField';
import { resolveAuroraVariant, AURORA_DOT_HUE } from './auroraVariants';

interface AmbientBackdropProps {
  reduceMotion: boolean;
}

/**
 * Reads the current route and picks a distinct AuroraLayer/AmbientField
 * palette for it (see auroraVariants.ts), instead of every page sharing
 * one global background. Must render inside the Router so useLocation
 * works.
 */
export default function AmbientBackdrop({ reduceMotion }: AmbientBackdropProps) {
  const { pathname } = useLocation();
  const variant = resolveAuroraVariant(pathname);

  return (
    <>
      <AuroraLayer reduceMotion={reduceMotion} variant={variant} />
      <AmbientField reduceMotion={reduceMotion} hueVar={AURORA_DOT_HUE[variant]} />
    </>
  );
}
