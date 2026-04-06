import { Pressable } from 'react-native';
import DarkIcon from '@/assets/icons/base/moon.yes.svg';
import LightIcon from '@/assets/icons/base/sun.max.yes.svg';
import { useAppTheme } from '@/hooks/useAppTheme.ts';

export const ToggleTheme = () => {
  const { isDark, colors, setTheme } = useAppTheme();
  return (
    <Pressable onPress={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? (
        <LightIcon color={colors.iconPrimary} width={30} height={30} />
      ) : (
        <DarkIcon color={colors.iconPrimary} width={30} height={30} />
      )}
    </Pressable>
  );
};
