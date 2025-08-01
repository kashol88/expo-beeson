import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { spacing } from '../../constants/theme';
import { getHealthVariant } from '../../utils/variants';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import Typography from '../ui/Typography';

interface HiveCardProps {
  hive: {
    id: number;
    name: string;
    health: string;
    lastInspection: string;
    honey: string;
    status: string;
  };
  onPress?: () => void;
}

const HiveCard = memo<HiveCardProps>(({ hive, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Typography variant="h4" color="primary">
            {hive.name}
          </Typography>
          <Badge 
            text={hive.health} 
            variant={getHealthVariant(hive.health)}
          />
        </View>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Typography variant="overline" color="muted">
              Senaste inspektion
            </Typography>
            <Typography variant="body" color="secondary">
              {hive.lastInspection}
            </Typography>
          </View>
          
          <View style={styles.detailItem}>
            <Typography variant="overline" color="muted">
              Honung
            </Typography>
            <Typography variant="body" color="secondary">
              {hive.honey}
            </Typography>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
});

HiveCard.displayName = 'HiveCard';

export default HiveCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flex: 1,
  },
});