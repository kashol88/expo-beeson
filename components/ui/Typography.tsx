import { Text, StyleSheet, TextStyle } from 'react-native';
import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'overline';
  color?: 'primary' | 'secondary' | 'muted' | 'white';
  align?: 'left' | 'center' | 'right';
  style?: TextStyle;
}

export default function Typography({
  children,
  variant = 'body',
  color = 'primary',
  align = 'left',
  style
}: TypographyProps) {
  return (
    <Text style={[
      styles.base,
      styles[variant],
      styles[color],
      styles[align],
      style
    ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: 'System',
  },
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  overline: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  primary: {
    color: '#0F172A',
  },
  secondary: {
    color: '#475569',
  },
  muted: {
    color: '#64748B',
  },
  white: {
    color: '#FFFFFF',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});