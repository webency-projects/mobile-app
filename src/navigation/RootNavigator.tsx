import { createStackNavigator  } from '@react-navigation/stack';
import type { RootStackParamList } from './types';
import { TabsNavigator } from './TabsNavigator.tsx';
import { useAppTheme } from '@/hooks/useAppTheme.ts';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { UserChatScreen } from '@/screens/chats/UserChatScreen.tsx';
import { NavigationBar } from '@/components/NavigationBar.tsx';
import { ProfileScreen } from '@/screens/profile/ProfileScreen.tsx';

const Stack = createStackNavigator<RootStackParamList>();


export const RootNavigator = () => {
  const { isDark, colors } = useAppTheme();
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
      <Stack.Navigator>
        <Stack.Screen name={'Tabs'} component={TabsNavigator} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name={"UserChat"} component={UserChatScreen} options={{
          header: ({route}) => <NavigationBar title={route.params?.title}/>
        }}/>
        <Stack.Screen name={"Profile"} component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
