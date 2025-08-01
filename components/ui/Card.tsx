import { View, StyleSheet, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { colors, spacing, borderRadius, shadows } from '../../constants/theme';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  style?: ViewStyle;
}

export default function Card({ children, variant = 'default', style }: CardProps) {
  return (
    <View style={[
      styles.card,
      styles[variant],
      style
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
  },
  default: shadows.sm,
  elevated: shadows.md,
  outlined: {
    borderWidth: 1,
    borderColor: colors.neutral[200],
    shadowOpacity: 0,
    elevation: 0,
  },
});