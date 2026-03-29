import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import {useMemo } from 'react';
import { useAppTheme } from '../../hooks/useAppTheme.ts';
import { ThemeColors } from '../../theme/types.ts';

interface ButtonProps {
  containerStyle?: ViewStyle;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'error';
  size?: 'small' | 'large';
  disabled?: false
}

export const Button = (props: ButtonProps) => {
  const { containerStyle, variant = 'primary' } = props;
  const { colors } = useAppTheme()
  const styles = useMemo(() => createStyles(colors),[colors])
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>Button</Text>
    </View>
  );
};

const createStyles = (color: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.buttonPrimaryBg
    },
    text: {
      color: color.buttonPrimaryText,
    }
  });
