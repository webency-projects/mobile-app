const staticColor = {
  black: '#141414',
  white: '#ffffff',
};

// ==================== БАЗОВЫЕ ТОКЕНЫ ====================

const baseLight = {
  primary: '#6852D6',
  primary50: '#F9F8FD',
  primary100: '#EDEAFA',
  primary200: '#DCD7F6',
  primary300: '#CCC4F1',
  primary400: '#BBB1ED',
  primary500: '#AA9EE8',
  primary600: '#9A8BE4',
  primary700: '#8978DF',
  primary800: '#7965DB',
  primary900: '#5D49BE',

  neutral50: '#FFFFFF',
  neutral100: '#FAFAFA',
  neutral200: '#F5F5F5',
  neutral300: '#E8E8E8',
  neutral400: '#DCDCDC',
  neutral500: '#A1A1A1',
  neutral600: '#727272',
  neutral700: '#5B5B5B',
  neutral800: '#434343',
  neutral900: '#141414',

  info: '#0B7BEA',
  warning: '#FFAB00',

  success1: '#09C26F',
  success2: '#079B59',
  success3: '#3ACE8C',
  success4: '#56E8A7',

  error1: '#F44649',
  error2: '#C3383A',
  error3: '#F66B6D',
};

const baseDark = {
  primary: '#6852D6',
  primary50: '#15102B',
  primary100: '#1D173C',
  primary200: '#251E4D',
  primary300: '#2E245E',
  primary400: '#362B6F',
  primary500: '#3E3180',
  primary600: '#473892',
  primary700: '#4F3EA3',
  primary800: '#5745B4',
  primary900: '#7460D9',

  neutral50: '#141414',
  neutral100: '#1A1A1A',
  neutral200: '#272727',
  neutral300: '#383838',
  neutral400: '#4C4C4C',
  neutral500: '#858585',
  neutral600: '#989898',
  neutral700: '#A8A8A8',
  neutral800: '#C8C8C8',
  neutral900: '#FFFFFF',

  info: '#0D66BF',
  warning: '#D08D04',

  success1: '#0B9F5D',
  success2: '#097F4A',
  success3: '#3CB27D',
  success4: '#56E8A7',

  error1: '#C73C3E',
  error2: '#9F3032',
  error3: '#D26365',
};

// ==================== СЕМАНТИЧЕСКИЕ ТОКЕНЫ ====================

const backgroundLight = {
  background01: baseLight.neutral50,
  background02: baseLight.neutral100,
  background03: baseLight.neutral200,
  background04: baseLight.neutral300,
};

const backgroundDark = {
  background01: baseDark.neutral50,
  background02: baseDark.neutral100,
  background03: baseDark.neutral200,
  background04: baseDark.neutral300,
};

const borderLight = {
  borderLight: baseLight.neutral200,
  borderDefault: baseLight.neutral300,
  borderDark: baseLight.neutral400,
  borderHighlight: baseLight.primary,
};

const borderDark = {
  borderLight: baseDark.neutral200,
  borderDefault: baseDark.neutral300,
  borderDark: baseDark.neutral400,
  borderHighlight: baseDark.primary,
};

const textLight = {
  textPrimary: baseLight.neutral900,
  textSecondary: baseLight.neutral600,
  textTertiary: baseLight.neutral500,
  textDisabled: baseLight.neutral400,
  textWhite: baseLight.neutral50,
  textHighlight: baseLight.primary,
}

const textDark = {
  textPrimary: baseDark.neutral900,
  textSecondary: baseDark.neutral600,
  textTertiary: baseDark.neutral500,
  textDisabled: baseDark.neutral400,
  textWhite: baseDark.neutral50,
  textHighlight: baseDark.primary,
};

const iconLight = {
  iconPrimary: baseLight.neutral900,
  iconSecondary: baseLight.neutral500,
  iconTertiary: baseLight.neutral400,
  iconWhite: baseLight.neutral50,
  iconHighlight: baseLight.primary,
};

const iconDark = {
  iconPrimary: baseDark.neutral900,
  iconSecondary: baseDark.neutral500,
  iconTertiary: baseDark.neutral400,
  iconWhite: baseDark.neutral50,
  iconHighlight: baseDark.primary,
};


const buttonLight = {
  buttonPrimaryBg: baseLight.primary,
  buttonPrimaryIcon: staticColor.white,
  buttonPrimaryText: staticColor.white,
  buttonSecondaryBg: baseLight.neutral900,
  buttonSecondaryIcon: baseLight.neutral900,
  buttonSecondaryText: baseLight.neutral900,
  buttonLink: baseLight.info,
  buttonFabBg: baseLight.primary,
  buttonFabIcon: staticColor.white,
}

const buttonDark = {
  buttonPrimaryBg: baseDark.primary,
  buttonPrimaryIcon: staticColor.white,
  buttonPrimaryText: staticColor.white,
  buttonSecondaryBg: baseDark.neutral900,
  buttonSecondaryIcon: baseDark.neutral900,
  buttonSecondaryText: baseDark.neutral900,
  buttonLink: baseDark.info,
  buttonFabBg: baseDark.primary,
  buttonFabIcon: staticColor.white,
}

const stateLight = {
  stateHover: baseLight.neutral100,
  statePressed: baseLight.neutral300,
}

const stateDark = {
  stateHover: baseDark.neutral100,
  statePressed: baseDark.neutral300,
}

const overlayLight = {
  overlayHover: baseLight.neutral100,
}

const overlayDark = {
  overlayHover: baseDark.neutral100,
}

export const themeColors = {
  light: {
    ...baseLight,
    ...backgroundLight,
    ...borderLight,
    ...textLight,
    ...iconLight,
    ...buttonLight,
    ...stateLight,
    ...overlayLight,
  },
  dark: {
    ...baseDark,
    ...backgroundDark,
    ...borderDark,
    ...textDark,
    ...iconDark,
    ...buttonDark,
    ...stateDark,
    ...overlayDark,
  }
} as const;


