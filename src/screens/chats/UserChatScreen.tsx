

import { Text, View, StyleSheet} from "react-native";
import { NavigationBar } from '@/components/NavigationBar.tsx';
import { useNavigation } from '@react-navigation/core';
interface IProps {}

export const UserChatScreen = (props: IProps) => {
    const {} = props;

    return (
        <View style={styles.container}>
            <Text>Chat user</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});