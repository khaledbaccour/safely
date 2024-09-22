import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  theme?: 'light' | 'dark'; 
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  theme = 'light', 
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = theme === 'dark' 
    ? darkColor || useThemeColor({}, 'background') 
    : lightColor || useThemeColor({}, 'background'); 

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
