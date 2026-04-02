import { View, StyleSheet} from "react-native";
import { SendMessageBlock } from '@/components/SendMessageBlock.tsx';
import { themeColors } from '@/theme/colors.ts';
import { MessageText } from '@/components/MessageText.tsx';


interface IProps {}

export const UserChatScreen = (props: IProps) => {
    const {} = props;


    return (
      <View style={styles.container}>
        <View style={styles.messages}>
          <MessageText isRight={false}/>
          <MessageText isRight={true}/>
          <MessageText isRight={false}/>
          <MessageText isRight={true}/>
        </View>
        <SendMessageBlock/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: themeColors.light.background03,
  },
  messages: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 16,
  },
});