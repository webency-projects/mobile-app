
import { Text, View, StyleSheet} from "react-native";
import  SendButton  from "@/assets/icons/base/SendButton.svg"
import AddIcon from "@/assets/icons/base/plus.circle.no.svg"
import MicrophoneIcon from "@/assets/icons/base/microphone.no.svg"
import SmileIcon from "@/assets/icons/base/face.smiling.no.svg"
import StickerIcon from "@/assets/icons/base/sticker.no.svg"
import AiIcon from "@/assets/icons/base/ai.no.svg"

import { themeColors } from '@/theme/colors.ts';
interface IProps {}

export const SendMessageBlock = (props: IProps) => {
    const {} = props;
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text>Type your message</Text>
        </View>
        <View style={styles.controls}>
          <View style={styles.leftControls}>
            <AddIcon/>
            <MicrophoneIcon/>
            <SmileIcon/>
            <StickerIcon />
            <AiIcon/>
          </View>
          <SendButton color={themeColors.light.neutral300} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColors.light.neutral50,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: themeColors.light.neutral300,
    padding: 8,
  },
  leftControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  messageBox: {
    padding: 8,
  },
});