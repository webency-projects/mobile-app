import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectProfile } from '@/store/selectors/profile.selectors.ts';
import { useAppTheme } from '@/hooks/useAppTheme.ts';
import PersonAddIcon from "@/assets/icons/base/person.badge.plus.no.svg"
import PersonsIcon from "@/assets/icons/base/person.2.no.svg"
import PersonsBannedIcon from "@/assets/icons/base/person.slash.no.svg"

interface IProps {}

export const ProfileScreen = (props: IProps) => {
  const {} = props;

  const { displayName } = useSelector(selectProfile);
  const { colors } = useAppTheme();
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={[styles.avatar, { backgroundColor: colors.primary }]} />
        <Text style={[styles.displayName, { color: colors.textPrimary }]}>
          {displayName}
        </Text>
      </View>
      <View style={styles.controls}>
        <View style={[styles.box, { borderColor: colors.primary600 }]}>
          <PersonAddIcon color={colors.iconHighlight} width={30} height={30} />
          <Text style={{ color: colors.textHighlight }}>Add</Text>
        </View>
        <View style={[styles.box, { borderColor: colors.primary600 }]}>
          <PersonsIcon color={colors.iconHighlight} width={30} height={30} />
          <Text style={{ color: colors.textHighlight }}>View</Text>
        </View>
        <View style={[styles.box, { borderColor: colors.primary600 }]}>
          <PersonsBannedIcon
            color={colors.iconHighlight}
            width={30}
            height={30}
          />
          <Text style={{ color: colors.textHighlight }}>Banned</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
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
  controls: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  box: {
    height: 80,
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
