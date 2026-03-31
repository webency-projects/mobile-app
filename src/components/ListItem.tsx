import { Text, View, StyleSheet } from 'react-native';
import { themeColors } from '@/theme/colors.ts';
import type { UserChatListItemType } from '@/types/ChatListTypes.ts';
import SenderIcon from "@/assets/icons/base/done_all.yes.svg"
import FilePhotoIcon from "@/assets/icons/base/photo.no.svg"
import FileVideoIcon from "@/assets/icons/base/video.no.svg"
import { useAppTheme } from '@/hooks/useAppTheme.ts';

interface IProps {
  item: UserChatListItemType;
}

export const ListItem = (props: IProps) => {
  const { item } = props;
  const {colors} = useAppTheme()
  const getSubtitle = (userItem: UserChatListItemType) => {
    switch (userItem.type) {
      case 'message':
        return (
          <View style={styles.subtitleWrap}>
            {userItem.isSender && <SenderIcon width={16} height={16} />}
            <Text style={[styles.subtitle, {color: colors.textSecondary}]}>{userItem.message}</Text>
          </View>
        );
      case 'file':
        return (
          <View style={styles.subtitleWrap}>
            {userItem.isSender && <SenderIcon width={16} height={16} />}
            {userItem.file === 'photo' ? (
              <FilePhotoIcon width={16} height={16} />
            ) : (
              <FileVideoIcon width={16} height={16} />
            )}
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              {userItem.file === 'photo' ? 'Photo' : 'Video'}
            </Text>
          </View>
        );
      case 'fileMessage':
        return (
          <View style={styles.subtitleWrap}>
            {userItem.isSender && <SenderIcon width={16} height={16} />}
            {userItem.file === 'photo' ? (
              <FilePhotoIcon width={16} height={16} />
            ) : (
              <FileVideoIcon width={16} height={16} />
            )}
            <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
              {userItem.message}
            </Text>
          </View>
        );
      default:
        return 'No message';
    }
  };
  const createAvatar = (username: string) => {
    const words = username.split(' ');
    if (words.length > 1) {
      return `${words[0]?.charAt(0).toUpperCase()}${words[1]
        ?.charAt(0)
        .toUpperCase()}`;
    }
    return words[0]?.charAt(0).toUpperCase()
  }
  return (
    <View style={[styles.container, {backgroundColor: colors.background02}]}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{createAvatar(item.name)}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleWrap}>
          <Text style={[styles.title, {color: colors.textPrimary}]}>{item.name}</Text>
          <Text style={[styles.time, {color: colors.textSecondary}]}>{item.time}</Text>
        </View>
        <View style={styles.subtitleWrap}>
            {getSubtitle(item)}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: themeColors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: themeColors.light.neutral300,
    fontSize: 16,
    fontWeight: 'bold',
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
    alignItems: 'center',
    gap: 4,
    flexShrink: 0,
  },
  subtitle: {},
});
