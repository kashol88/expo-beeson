import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import Typography from '../ui/Typography';

interface SectionProps {
  title: string;
  children: ReactNode;
  action?: {
    text: string;
    onPress: () => void;
  };
  style?: any;
}

export default function Section({ title, children, action, style }: SectionProps) {
  return (
    <View style={[styles.section, style]}>
      <View style={styles.header}>
        <Typography variant="h3" color="primary">
          {title}
        </Typography>
        {action && (
          <TouchableOpacity onPress={action.onPress}>
            <Typography variant="body" color="primary" style={styles.actionText}>
              {action.text}
            </Typography>
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionText: {
    color: '#3B82F6',
    fontWeight: '600',
  },
});