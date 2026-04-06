import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsParamList } from './types';
import { CallsScreen } from '@/screens/calls/CallsScreen.tsx';
import { UsersScreen } from '@/screens/users/UsersScreen.tsx';
import { GroupsScreen } from '@/screens/groups/GroupsScreen.tsx';
import { TabIcons } from '@/components/TabIcons.tsx';
import { ChatsScreen } from '@/screens/chats/ChatsScreen.tsx';
import { TabHeader } from '@/components/TabHeader.tsx';

const Tabs = createBottomTabNavigator<TabsParamList>();

export const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name={'ChatsTab'}
        component={ChatsScreen}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: TabIcons.Chats,
          header: () => <TabHeader title={'Chats'} />,
        }}
      />
      <Tabs.Screen
        name={'CallsTab'}
        component={CallsScreen}
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: TabIcons.Calls,
          header: () => <TabHeader title={'Calls'} />,
        }}
      />
      <Tabs.Screen
        name={'UsersTab'}
        component={UsersScreen}
        options={{
          tabBarLabel: 'Users',
          tabBarIcon: TabIcons.Users,
          header: () => <TabHeader title={'Users'} />,
        }}
      />
      <Tabs.Screen
        name={'GroupsTab'}
        component={GroupsScreen}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: TabIcons.Groups,
          header: () => <TabHeader title={'Groups'} />,
        }}
      />
    </Tabs.Navigator>
  );
};
