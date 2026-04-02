import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsParamList } from './types';
import { CallsScreen } from '@/screens/calls/CallsScreen.tsx';
import { UsersScreen } from '@/screens/users/UsersScreen.tsx';
import { GroupsScreen } from '@/screens/groups/GroupsScreen.tsx';
import { TabIcons } from '@/components/TabIcons.tsx';
import { ChatsScreen } from '@/screens/chats/ChatsScreen.tsx';

const Tabs = createBottomTabNavigator<TabsParamList>();

export const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={'ChatsTab'}
        component={ChatsScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: TabIcons.Chats,
        }}
      />
      <Tabs.Screen
        name={'CallsTab'}
        component={CallsScreen}
        options={{
          tabBarLabel: 'Calls',
          headerTitle: 'Calls',
          tabBarIcon: TabIcons.Calls,
        }}
      />
      <Tabs.Screen
        name={'UsersTab'}
        component={UsersScreen}
        options={{
          tabBarLabel: 'Users',
          headerTitle: 'Users',
          tabBarIcon: TabIcons.Users,
        }}
      />
      <Tabs.Screen
        name={'GroupsTab'}
        component={GroupsScreen}
        options={{
          tabBarLabel: 'Groups',
          headerTitle: 'Groups',
          tabBarIcon: TabIcons.Groups,
        }}
      />
    </Tabs.Navigator>
  );
};
