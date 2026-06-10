export function url(path: string = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : '/' + path;
  return base + normalized;
}

export function formatDate(d: Date | string, opts: { mode?: 'long' | 'short' | 'iso' } = {}) {
  const date = typeof d === 'string' ? new Date(d) : d;
  if (opts.mode === 'iso') return date.toISOString().slice(0, 10);
  if (opts.mode === 'short') {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function relativeFromNow(d: Date | string, now: Date = new Date('2026-06-07')) {
  const date = typeof d === 'string' ? new Date(d) : d;
  const days = Math.round((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  if (days < 1) return 'today';
  if (days < 2) return 'yesterday';
  if (days < 14) return `${days}d ago`;
  if (days < 60) return `${Math.round(days / 7)}w ago`;
  if (days < 365) return `${Math.round(days / 30)}mo ago`;
  return `${Math.round(days / 365)}y ago`;
}
