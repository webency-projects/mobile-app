import { Text, View, StyleSheet} from "react-native";
import  SendButton  from "@/assets/icons/base/SendButton.svg"
import AddIcon from "@/assets/icons/base/plus.circle.no.svg"
import MicrophoneIcon from "@/assets/icons/base/microphone.no.svg"
import SmileIcon from "@/assets/icons/base/face.smiling.no.svg"
import StickerIcon from "@/assets/icons/base/sticker.no.svg"
import AiIcon from "@/assets/icons/base/ai.no.svg"

import { useAppTheme } from '@/hooks/useAppTheme.ts';
interface IProps {}

export const SendMessageBlock = (props: IProps) => {
    const {} = props;
    const {colors} = useAppTheme()
    return (
      <View style={[styles.container, {backgroundColor: colors.neutral50}]}>
        <View style={styles.messageBox}>
          <Text style={{color: colors.textPrimary}}>Type your message</Text>
        </View>
        <View style={[styles.controls, {borderColor: colors.neutral300}]}>
          <View style={styles.leftControls}>
            <AddIcon color={colors.iconPrimary}/>
            <MicrophoneIcon color={colors.iconPrimary}/>
            <SmileIcon color={colors.iconPrimary}/>
            <StickerIcon color={colors.iconPrimary}/>
            <AiIcon color={colors.iconPrimary}/>
          </View>
          <SendButton color={colors.neutral300} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 8,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
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
