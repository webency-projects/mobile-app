
import {SafeAreaView} from "react-native-safe-area-context"
import { Text, StyleSheet} from "react-native";
interface IProps {}

export const CallsScreen = (props: IProps) => {
    const {} = props;
    return (
      <SafeAreaView style={styles.container}>
        <Text>Component</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});