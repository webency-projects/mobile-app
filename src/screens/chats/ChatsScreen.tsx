import { View, StyleSheet} from "react-native";
import { ListItem } from '@/components/ListItem.tsx';
interface IProps {}

export const ChatsScreen = (props: IProps) => {
    const {} = props;
    return (
        <View style={styles.container}>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});