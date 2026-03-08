import { IBM_Plex_Mono, Manrope } from 'next/font/google';

export const sansFont = Manrope({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
});

export const monoFont = IBM_Plex_Mono({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});
