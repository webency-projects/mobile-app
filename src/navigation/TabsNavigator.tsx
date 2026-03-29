import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsParamList } from './types';
import { ChatsScreen } from '@/screens/chats/ChatsScreen.tsx';
import { CallsScreen } from '@/screens/calls/CallsScreen.tsx';
import { UsersScreen } from '@/screens/users/UsersScreen.tsx';
import { GroupsScreen } from '@/screens/groups/GroupsScreen.tsx';

const Tabs = createBottomTabNavigator<TabsParamList>();

export const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={'ChatsTab'}
        component={ChatsScreen}
        options={{
          tabBarLabel: 'Chats',
          headerTitle: 'Chats',
        }}
      />
      <Tabs.Screen
        name={'CallsTab'}
        component={CallsScreen}
        options={{
          tabBarLabel: 'Calls',
          headerTitle: 'Calls' ,
      }}
      />
      <Tabs.Screen
        name={'UsersTab'}
        component={UsersScreen}
        options={{
          tabBarLabel: 'Users',
          headerTitle: 'Users' ,
      }}
      />
      <Tabs.Screen
        name={'GroupsTab'}
        component={GroupsScreen}
        options={{
          tabBarLabel: 'Groups',
          headerTitle: 'Groups' ,
      }}
      />
    </Tabs.Navigator>
  );
};
