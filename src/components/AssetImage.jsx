import { useState } from 'react';

export default function AssetImage({ src, alt, className = '', fallbackSrc = '/assets/snekky-mascot.png' }) {
  const normalize = (value) => value?.replace(/\.(svg|png|webp|jpg|jpeg)$/i, '');

  const candidates = [
    src,
    src && `${normalize(src)}.png`,
    src && `${normalize(src)}.webp`,
    src && `${normalize(src)}.jpg`,
    src && `${normalize(src)}.svg`,
    fallbackSrc,
  ].filter(Boolean);

  const [candidateIndex, setCandidateIndex] = useState(0);

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    }
  };

  return <img src={candidates[candidateIndex]} alt={alt} className={className} onError={handleError} loading="lazy" />;
}
