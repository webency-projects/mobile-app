import { View, StyleSheet, Pressable } from "react-native";
import { ListItem } from '@/components/ListItem.tsx';
import {DATA as MockData} from '@/screens/chats/Data.ts';
import { useNavigation } from '@react-navigation/core';
import { useAppTheme } from '@/hooks/useAppTheme.ts';
import { UserChatListItemType } from '@/types/ChatListTypes.ts';

interface IProps {}

export const ChatsScreen = (props: IProps) => {
    const {} = props;
    const navigation = useNavigation();
    const {colors} = useAppTheme()

    const handleNavigate = (item: UserChatListItemType) => {
      navigation.navigate('ChatsTab', {screen: "UserChat", params: {title: item.name}})
    }
    return (
      <View style={[styles.container, {backgroundColor: colors.background01}]}>
        {MockData.map(item => (
          <Pressable
            key={item.id}
            onPress={() => handleNavigate(item)}
          >
            <ListItem item={item} />
          </Pressable>
        ))}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});