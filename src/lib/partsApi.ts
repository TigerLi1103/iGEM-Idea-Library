const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

export const PARTS_API_BASE = trimTrailingSlash(
  (import.meta.env.VITE_PARTS_API_BASE as string | undefined) || ''
);

export const partsApiUrl = (path: string) => {
  if (!PARTS_API_BASE) return path;
  return `${PARTS_API_BASE}${path.startsWith('/') ? path : `/${path}`}`;
};
