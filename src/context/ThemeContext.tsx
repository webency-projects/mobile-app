import { ThemeColors, ThemeMode } from '../theme/types.ts';
import { createContext, ReactNode, useCallback, useState } from 'react';
import { useColorScheme } from 'react-native';
import { themeColors } from '../theme/colors.ts';


interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  isDark: boolean;
  colors: ThemeColors;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const systemScheme = useColorScheme();
  const [userTheme, setUserTheme] = useState<ThemeMode>('system');

  const currentMode = userTheme === 'system' ? (systemScheme ?? 'light') : userTheme;
  const isDark = currentMode === 'dark';
  const colors = themeColors[isDark ? 'dark' : 'light'];

  const setTheme =  useCallback((mode: ThemeMode) => {
    setUserTheme(mode);
  }, [setUserTheme]);
  return (
    <ThemeContext.Provider value={{ theme: userTheme, setTheme, isDark, colors}}>
      {children}
    </ThemeContext.Provider>
  )
}
