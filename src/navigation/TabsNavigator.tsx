import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsParamList } from './types';
import { ChatsScreen } from '@/screens/chats/ChatsScreen.tsx';
import { CallsScreen } from '@/screens/calls/CallsScreen.tsx';
import { UsersScreen } from '@/screens/users/UsersScreen.tsx';
import { GroupsScreen } from '@/screens/groups/GroupsScreen.tsx';
import ChatsDefaultIcon from "@/assets/icons/tabs/ChatsDefault.svg"
import ChatsSelectedIcon from "@/assets/icons/tabs/ChatsSelected.svg"
import CallsSelectedIcon from "@/assets/icons/tabs/CallsSelected.svg"
import CallsDefaultIcon from "@/assets/icons/tabs/CallsDefault.svg"
import UsersSelectedIcon from "@/assets/icons/tabs/UsersSelected.svg"
import UsersDefaultIcon from "@/assets/icons/tabs/UsersDefault.svg"
import GroupsSelectedIcon from "@/assets/icons/tabs/GroupsSelected.svg"
import GroupsDefaultIcon from "@/assets/icons/tabs/GroupsDefault.svg"
import { ChatsNavigator } from '@/navigation/ChatsNavigator.tsx';

const Tabs = createBottomTabNavigator<TabsParamList>();

type TabIconType = { focused: boolean; color: string; size: number };

const ChatsTabIcon = ({ focused, color, size }: TabIconType) =>
  focused ? (
    <ChatsSelectedIcon color={color} width={size} height={size} />
  ) : (
    <ChatsDefaultIcon color={color} width={size} height={size} />
  );
const CallsTabIcon = ({ focused, color, size }: TabIconType) =>
  focused ? (
    <CallsSelectedIcon color={color} width={size} height={size} />
  ) : (
    <CallsDefaultIcon color={color} width={size} height={size} />
  );
const UsersTabIcon = ({ focused, color, size }: TabIconType) =>
  focused ? (
    <UsersSelectedIcon color={color} width={size} height={size} />
  ) : (
    <UsersDefaultIcon color={color} width={size} height={size} />
  );
const GroupsTabIcon = ({ focused, color, size }: TabIconType) =>
  focused ? (
    <GroupsSelectedIcon color={color} width={size} height={size} />
  ) : (
    <GroupsDefaultIcon color={color} width={size} height={size} />
  );

export const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={'ChatsTab'}
        component={ChatsNavigator}
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ChatsTabIcon,
        }}
      />
      <Tabs.Screen
        name={'CallsTab'}
        component={CallsScreen}
        options={{
          tabBarLabel: 'Calls',
          headerTitle: 'Calls',
          tabBarIcon: CallsTabIcon,
        }}
      />
      <Tabs.Screen
        name={'UsersTab'}
        component={UsersScreen}
        options={{
          tabBarLabel: 'Users',
          headerTitle: 'Users',
          tabBarIcon: UsersTabIcon,
        }}
      />
      <Tabs.Screen
        name={'GroupsTab'}
        component={GroupsScreen}
        options={{
          tabBarLabel: 'Groups',
          headerTitle: 'Groups',
          tabBarIcon: GroupsTabIcon,
        }}
      />
    </Tabs.Navigator>
  );
};
