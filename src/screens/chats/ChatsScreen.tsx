import { StyleSheet, Pressable, View } from "react-native";
import { ListItem } from '@/components/ListItem.tsx';
import {DATA as MockData} from '@/screens/chats/Data.ts';
import { useNavigation } from '@react-navigation/core';
import { useAppTheme } from '@/hooks/useAppTheme.ts';
import { UserChatListItemType } from '@/types/ChatListTypes.ts';
import {RootStackParamList} from "@/navigation/types.ts"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';


type Nav = NativeStackNavigationProp<RootStackParamList>;

interface IProps {}

export const ChatsScreen = (props: IProps) => {
    const {} = props;
    const navigation = useNavigation<Nav>();
    const {colors} = useAppTheme()

    const handleNavigate = (item: UserChatListItemType) => {
      navigation.navigate('UserChat', {title: item.name})
    }
    return (
      <View
        style={[styles.container, {backgroundColor: colors.background01 }]}
      >
        {MockData.map(item => (
          <Pressable key={item.id} onPress={() => handleNavigate(item)}>
            <ListItem item={item} />
          </Pressable>
        ))}
      </View
       >
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
