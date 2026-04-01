import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatsScreen } from '@/screens/chats/ChatsScreen.tsx';
import { UserChatScreen } from '@/screens/chats/UserChatScreen.tsx';
import { NavigationBar } from '@/components/NavigationBar.tsx';
import {ChatStackParamList} from "./types"


const Stack = createNativeStackNavigator<ChatStackParamList>();

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
      <Stack.Screen
        name="UserChat"
        component={UserChatScreen}
        options={{
          header: ({route}) => <NavigationBar title={route.params.title}/>
        }}
      />
    </Stack.Navigator>
  );
}