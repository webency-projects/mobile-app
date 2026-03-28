import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.tsx';


export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useAppTheme must be used within ThemeProvider");
  return context;
}
