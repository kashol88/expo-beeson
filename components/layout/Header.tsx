import { View, StyleSheet, Platform } from 'react-native';
import Typography from '../ui/Typography';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Typography variant="h1" color="primary">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body" color="muted">
          {subtitle}
        </Typography>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#FFFFFF',
  },
});