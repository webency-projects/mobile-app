
import { Text, View, StyleSheet} from "react-native";
import SenderIcon from '@/assets/icons/base/done_all.yes.svg';
import { useAppTheme } from '@/hooks/useAppTheme.ts';
interface IProps {
  isRight: boolean;
}

export const MessageText = (props: IProps) => {
    const {isRight} = props;
    const { colors } = useAppTheme();
    const side = isRight ? 'flex-end' : "flex-start"
    const bgColor = isRight ? colors.primary : colors.background03
    const color = isRight ? colors.textPrimary : colors.textPrimary
    return (
      <View
        style={[
          styles.container,
          { justifyContent: side },
        ]}
      >
        <View style={[styles.sideContainer, { backgroundColor: bgColor }]}>
          <Text style={{color}}>Great, I’ll send it now. Thanks!</Text>
          <View style={styles.extraInfo}>
            <Text style={{color}}>22:30</Text>
            <SenderIcon />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  sideContainer: {
    padding: 8,
    borderRadius: 8,
  },
  extraInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
});
