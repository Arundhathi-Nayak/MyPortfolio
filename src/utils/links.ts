/** True when a URL is missing or still one of the "your-…" placeholders. */
export function isPlaceholderUrl(url?: string): boolean {
  return !url || /your-|your\.|example\.com/i.test(url);
}

/** True for links that leave the site (http/https). */
export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}