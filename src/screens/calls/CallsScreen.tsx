

import { Text, View, StyleSheet} from "react-native";
interface IProps {}

export const CallsScreen = (props: IProps) => {
    const {} = props;
    return (
        <View style={styles.container}>
            <Text>Component</Text>
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