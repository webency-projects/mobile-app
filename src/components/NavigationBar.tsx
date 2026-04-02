
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import VideoIcon from "@/assets/icons/base/video.no.svg"
import PhoneIcon from "@/assets/icons/base/phone.no.svg"
import InfoIcon from "@/assets/icons/base/info.circle.no.svg"
import BackIcon from "@/assets/icons/base/chevron.left.no.svg"

import { themeColors } from '@/theme/colors.ts';
import { useNavigation } from '@react-navigation/core';
import { useSafeAreaInsets } from "react-native-safe-area-context"
interface IProps {
  title: string,
}

export const NavigationBar = (props: IProps) => {
    const {title} = props;
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
      <View style={[styles.container, {marginTop: insets.top}]}>
        <View style={styles.leftBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <View style={styles.icon} />
          <View style={styles.content}>
            <Text style={styles.contentTitle}>{title}</Text>
            <Text style={styles.contentSubTitle}>online</Text>
          </View>
        </View>
        <View style={styles.rightBar}>
          <VideoIcon />
          <PhoneIcon />
          <InfoIcon />
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
    marginHorizontal: 20,
    backgroundColor: themeColors.light.textWhite,
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
    color: themeColors.light.neutral700,
  },
  leftBar: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});