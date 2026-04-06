import { View, StyleSheet, TextInput } from 'react-native';
import SendButton from '@/assets/icons/base/SendButton.svg';
import AddIcon from '@/assets/icons/base/plus.circle.no.svg';
import MicrophoneIcon from '@/assets/icons/base/microphone.no.svg';
import SmileIcon from '@/assets/icons/base/face.smiling.no.svg';
import StickerIcon from '@/assets/icons/base/sticker.no.svg';
import AiIcon from '@/assets/icons/base/ai.no.svg';

import { useAppTheme } from '@/hooks/useAppTheme.ts';
import { useState } from 'react';
interface IProps {}

export const SendMessageBlock = (props: IProps) => {
  const {} = props;
  const { colors } = useAppTheme();
  const [message, setMessage] = useState('');
  const hasMessage = message.trim().length > 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.neutral50 }]}>
      <View style={styles.messageBox}>
        <TextInput
          style={[styles.input, { borderColor: colors.borderLight, color: colors.textPrimary }]}
          value={message}
          onChangeText={v => setMessage(v)}
          placeholder={'Type a message'}
          placeholderTextColor={colors.textTertiary}
          multiline
        />
      </View>
      <View style={[styles.controls, { borderColor: colors.neutral300 }]}>
        <View style={styles.leftControls}>
          <AddIcon color={colors.iconPrimary} />
          <MicrophoneIcon color={colors.iconPrimary} />
          <SmileIcon color={colors.iconPrimary} />
          <StickerIcon color={colors.iconPrimary} />
          <AiIcon color={colors.iconPrimary} />
        </View>
        <SendButton color={hasMessage ? colors.primary : colors.neutral300} />
      </View>
    </View>
  );
};

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
  input: {
    minHeight: 30,
    maxHeight: 120,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});
