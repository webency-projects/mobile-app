import { Text, View, StyleSheet} from "react-native";
import { themeColors } from '@/theme/colors.ts';
import { fonts } from '@/theme/typography.ts';
interface IProps {}

export const ListItem = (props: IProps) => {
    const {} = props;
    return (
      <View style={styles.container}>
        <View style={styles.avatar} />
        <View style={styles.content}>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>Tom Hanks</Text>
            <Text style={styles.time}>22:40</Text>
          </View>
          <View style={styles.subtitleWrap}>
            <Text style={styles.subtitle} numberOfLines={1}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: themeColors.light.neutral300,
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: themeColors.light.primary,
  },
  content: {
    flexGrow: 1,
    gap: 4,
  },
  titleWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 18,
  },
  time: {
    fontFamily: 'sans-serif',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 16,
    color: themeColors.light.neutral500,
  },
  subtitleWrap: {
    maxWidth: 300,
    flexDirection: 'row',
    flexShrink: 0,
  },
  subtitle: {},
});