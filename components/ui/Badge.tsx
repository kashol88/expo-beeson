import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface BadgeProps {
  text: string;
  variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
  size?: 'small' | 'medium';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Badge({ 
  text, 
  variant = 'default', 
  size = 'medium',
  style,
  textStyle 
}: BadgeProps) {
  return (
    <View style={[
      styles.badge,
      styles[variant],
      styles[size],
      style
    ]}>
      <Text style={[
        styles.text,
        styles[`${variant}Text`],
        styles[`${size}Text`],
        textStyle
      ]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  success: {
    backgroundColor: '#10B981',
  },
  warning: {
    backgroundColor: '#F59E0B',
  },
  error: {
    backgroundColor: '#EF4444',
  },
  info: {
    backgroundColor: '#3B82F6',
  },
  default: {
    backgroundColor: '#6B7280',
  },
  small: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  medium: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  text: {
    fontWeight: '600',
    color: '#FFFFFF',
  },
  successText: {
    color: '#FFFFFF',
  },
  warningText: {
    color: '#FFFFFF',
  },
  errorText: {
    color: '#FFFFFF',
  },
  infoText: {
    color: '#FFFFFF',
  },
  defaultText: {
    color: '#FFFFFF',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 12,
  },
});