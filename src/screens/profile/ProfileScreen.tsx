import { Text, View, StyleSheet} from "react-native";
import { useSelector } from 'react-redux';
import { selectProfile } from '@/store/selectors/profile.selectors.ts';
import { useAppTheme } from '@/hooks/useAppTheme.ts';
interface IProps {}

export const ProfileScreen = (props: IProps) => {
    const {} = props;

    const {displayName} = useSelector(selectProfile)
    const {colors} = useAppTheme()
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={[styles.avatar, {backgroundColor: colors.primary}]}/>
          <Text style={[styles.displayName, {color: colors.textPrimary}]}>{displayName}</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  info: {
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  displayName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'normal',
  },
});