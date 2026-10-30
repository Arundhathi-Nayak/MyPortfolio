import { useEffect, useState } from 'react';

export type FileStatus = 'checking' | 'ready' | 'missing';

/** Only a clear "not found" counts as missing; network hiccups never block the buttons. */
export function useFileAvailable(url: string): FileStatus {
  const [status, setStatus] = useState<FileStatus>('checking');

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { method: 'HEAD', signal: controller.signal })
      .then((res) => {
        const type = res.headers.get('content-type') ?? '';
        setStatus(res.ok && type.includes('pdf') ? 'ready' : 'missing');
      })
      .catch((error: unknown) => {
        if ((error as Error).name !== 'AbortError') setStatus('ready');
      });

    return () => controller.abort();
  }, [url]);

  return status;
}