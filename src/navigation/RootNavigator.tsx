import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./types"
import { TabsNavigator } from './TabsNavigator.tsx';


const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={"Tabs"} component={TabsNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}