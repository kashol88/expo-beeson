import { View, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import Typography from '../ui/Typography';

interface WeatherCardProps {
  temperature: string;
  condition: string;
  description: string;
  wind: string;
  humidity: string;
}

export default function WeatherCard({
  temperature,
  condition,
  description,
  wind,
  humidity
}: WeatherCardProps) {
  return (
    <Card variant="elevated" style={styles.card}>
      <View style={styles.header}>
        <Typography variant="h4" color="white">
          Väder idag
        </Typography>
        <Typography variant="h1" color="white">
          {temperature}
        </Typography>
      </View>
      
      <Typography variant="body" color="white" style={styles.description}>
        {condition} • {description}
      </Typography>
      
      <View style={styles.details}>
        <Typography variant="caption" color="white">
          Vind: {wind}
        </Typography>
        <Typography variant="caption" color="white">
          Fuktighet: {humidity}
        </Typography>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3B82F6',
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  description: {
    marginBottom: 12,
    opacity: 0.9,
  },
  details: {
    flexDirection: 'row',
    gap: 16,
  },
});