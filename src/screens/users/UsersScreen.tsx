import { Text, View, StyleSheet} from "react-native";
import { useSelector } from 'react-redux';
import { getUsers } from '@/store/selectors/user.selectors.ts';


interface IProps {}

export const UsersScreen = (props: IProps) => {
    const {} = props;
    const users = useSelector(getUsers)
    return (
        <View style={styles.container}>
          {users.map((user) => (
            <Text key={user.id} style={{color: "#fff"}}>{user.displayName}</Text>
          ))}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
