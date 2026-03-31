import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatsScreen } from '@/screens/chats/ChatsScreen.tsx';
import { UserChatScreen } from '@/screens/chats/UserChatScreen.tsx';



const Stack = createNativeStackNavigator();

export const ChatsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Chats'}>
      <Stack.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="UserChat" component={UserChatScreen} />
    </Stack.Navigator>
  );
}