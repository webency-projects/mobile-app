import { themeColors } from './colors.ts';
export type ThemeColors = typeof themeColors.light;
export type ThemeMode = keyof typeof themeColors | 'system';
