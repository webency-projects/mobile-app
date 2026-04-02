import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import VideoIcon from "@/assets/icons/base/video.no.svg"
import PhoneIcon from "@/assets/icons/base/phone.no.svg"
import InfoIcon from "@/assets/icons/base/info.circle.no.svg"
import BackIcon from "@/assets/icons/base/chevron.left.no.svg"

import { themeColors } from '@/theme/colors.ts';
import { useNavigation } from '@react-navigation/core';
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useAppTheme } from '@/hooks/useAppTheme.ts';
interface IProps {
  title: string,
}

export const NavigationBar = (props: IProps) => {
    const {title} = props;
    const { colors } = useAppTheme()
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
      <View style={[styles.container, {marginTop: insets.top, backgroundColor: colors.background01}]}>
        <View style={styles.leftBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon color={colors.iconPrimary} />
          </TouchableOpacity>
          <View style={styles.icon} />
          <View style={styles.content}>
            <Text style={[styles.contentTitle, {color: colors.textPrimary}]}>{title}</Text>
            <Text style={[styles.contentSubTitle, {color: colors.textSecondary}]}>online</Text>
          </View>
        </View>
        <View style={styles.rightBar}>
          <VideoIcon color={colors.iconPrimary} />
          <PhoneIcon color={colors.iconPrimary} />
          <InfoIcon color={colors.iconPrimary} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: 20,
  },
  rightBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    width: 34,
    height: 34,
    backgroundColor: themeColors.light.primary,
    borderRadius: 34,
  },
  content: {
    gap: 2,
  },
  contentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentSubTitle: {
    fontSize: 12,
  },
  leftBar: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
