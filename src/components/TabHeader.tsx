import { Text, View, StyleSheet, Pressable } from "react-native";
import { themeColors } from '@/theme/colors.ts';
import {useSafeAreaInsets} from "react-native-safe-area-context"
import { useAppTheme } from '@/hooks/useAppTheme.ts';
import { ToggleTheme } from '@/components/shared/ToggleTheme.tsx';
import { useNavigation } from '@react-navigation/core';
interface IProps {
  title: string;
}

export const TabHeader = (props: IProps) => {
    const {title} = props;
    const insets = useSafeAreaInsets();
    const navigation = useNavigation()
    const {colors} = useAppTheme()
    return (
      <View style={[styles.container, { marginTop: insets.top }]}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          {title}
        </Text>
        <View style={styles.control}>
          <ToggleTheme />
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <View style={styles.icon}>
              <Text style={{ color: colors.textWhite, textAlign: 'center' }}>
                SF
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginHorizontal: 20,
  },
  icon: {
    width: 34,
    height: 34,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.light.primary,
    borderRadius: 34,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  control: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});