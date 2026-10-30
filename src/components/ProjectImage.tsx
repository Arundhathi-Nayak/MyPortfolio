import { ImageOff } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type ImageState = 'loading' | 'loaded' | 'error';

interface ProjectImageProps {
  src: string;
  alt: string;
}

/** Screenshot with a loading skeleton and a friendly fallback if the file is missing. */
export function ProjectImage({ src, alt }: ProjectImageProps) {
  const [state, setState] = useState<ImageState>('loading');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete) setState(img.naturalWidth > 0 ? 'loaded' : 'error');
    else setState('loading');
  }, [src]);

  return (
    <div className={`shot shot--${state}`}>
      {state !== 'error' && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          onLoad={() => setState('loaded')}
          onError={() => setState('error')}
        />
      )}
      {state === 'loading' && <div className="shot__skeleton" aria-hidden="true" />}
      {state === 'error' && (
        <div className="shot__error" role="img" aria-label={`${alt} (image unavailable)`}>
          <ImageOff size={28} aria-hidden="true" />
          <p>Screenshot unavailable. Add the image to public/projects.</p>
        </div>
      )}
    </div>
  );
}