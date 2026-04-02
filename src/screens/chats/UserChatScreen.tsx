import { View, StyleSheet} from "react-native";
import { SendMessageBlock } from '@/components/SendMessageBlock.tsx';
import { MessageText } from '@/components/MessageText.tsx';
import { useAppTheme } from '@/hooks/useAppTheme.ts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface IProps {}

export const UserChatScreen = (props: IProps) => {
    const {} = props;
    const insets = useSafeAreaInsets();
    const {colors} = useAppTheme();

    return (
      <View style={[styles.container, { backgroundColor: colors.background01, paddingBottom: insets.bottom }]}>
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
  },
  messages: {
    flex: 1,
    justifyContent: "flex-end",
    margin: 16,
  },
});
