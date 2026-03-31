import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { TabsNavigator } from './TabsNavigator.tsx';
import { Pressable } from 'react-native';
import { useAppTheme } from '@/hooks/useAppTheme.ts';
import DarkIcon from '@/assets/icons/base/moon.yes.svg';
import LightIcon from '@/assets/icons/base/sun.max.yes.svg';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { isDark, setTheme, colors } = useAppTheme();
  const navTheme = {
    ...(isDark ? DarkTheme : DefaultTheme),
    colors: {
      ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
      background: colors.background01,
      card: colors.background01,
      text: colors.textPrimary,
      border: colors.borderDefault,
      primary: colors.primary,
    },
  };
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => (
            <Pressable onPress={() => setTheme(isDark ? 'light' : 'dark')}>
              {isDark ? <LightIcon color={colors.neutral900}/> : <DarkIcon color={"red"} />}
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name={'Tabs'} component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
