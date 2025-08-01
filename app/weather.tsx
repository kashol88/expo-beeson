import { View, ScrollView, StyleSheet, StatusBar } from 'react-native';
import Section from '../components/layout/Section';
import WeatherCard from '../components/weather/WeatherCard';
import Card from '../components/ui/Card';
import Typography from '../components/ui/Typography';

export default function WeatherScreen() {
  const weeklyForecast = [
    { day: 'Idag', temp: '22°C', condition: 'Soligt', wind: '8 km/h', humidity: '65%', suitable: true },
    { day: 'Imorgon', temp: '24°C', condition: 'Molnigt', wind: '12 km/h', humidity: '70%', suitable: true },
    { day: 'Torsdag', temp: '19°C', condition: 'Regn', wind: '15 km/h', humidity: '85%', suitable: false },
    { day: 'Fredag', temp: '21°C', condition: 'Delvis molnigt', wind: '10 km/h', humidity: '68%', suitable: true },
    { day: 'Lördag', temp: '25°C', condition: 'Soligt', wind: '6 km/h', humidity: '60%', suitable: true },
    { day: 'Söndag', temp: '23°C', condition: 'Soligt', wind: '9 km/h', humidity: '63%', suitable: true },
  ];

  const getSuitabilityText = (suitable: boolean) => {
    return suitable ? 'Bra för inspektion' : 'Undvik inspektion';
  };

  const getSuitabilityColor = (suitable: boolean) => {
    return suitable ? 'success' : 'secondary';
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <WeatherCard
          temperature="22°C"
          condition="Soligt"
          description="Perfekt för inspektion"
          wind="8 km/h"
          humidity="65%"
        />

        <Section title="7-dagars prognos">
          {weeklyForecast.map((forecast, index) => (
            <Card key={index} style={styles.forecastCard}>
              <View style={styles.forecastHeader}>
                <View style={styles.forecastBasic}>
                  <Typography variant="h4" color="primary">
                    {forecast.day}
                  </Typography>
                  <Typography variant="body" color="secondary">
                    {forecast.condition}
                  </Typography>
                </View>
                <Typography variant="h3" color="primary">
                  {forecast.temp}
                </Typography>
              </View>
              
              <View style={styles.forecastDetails}>
                <View style={styles.forecastDetailRow}>
                  <Typography variant="caption" color="muted">
                    Vind: {forecast.wind}
                  </Typography>
                  <Typography variant="caption" color="muted">
                    Fuktighet: {forecast.humidity}
                  </Typography>
                </View>
                
                <Typography 
                  variant="caption" 
                  color={getSuitabilityColor(forecast.suitable)}
                  style={styles.suitability}
                >
                  {getSuitabilityText(forecast.suitable)}
                </Typography>
              </View>
            </Card>
          ))}
        </Section>

        <Section title="Vädertips">
          <Card style={styles.tipCard}>
            <Typography variant="h4" color="primary" style={styles.tipTitle}>
              Bästa inspektionsväder
            </Typography>
            <Typography variant="body" color="secondary">
              • Temperatur över 15°C{'\n'}
              • Svag vind (under 15 km/h){'\n'}
              • Ingen nederbörd{'\n'}
              • Soligt eller delvis molnigt
            </Typography>
          </Card>
        </Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  forecastCard: {
    marginBottom: 12,
  },
  forecastHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  forecastBasic: {
    flex: 1,
  },
  forecastDetails: {
    gap: 8,
  },
  forecastDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  suitability: {
    fontWeight: '600',
  },
  tipCard: {
    backgroundColor: '#F0F9FF',
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  tipTitle: {
    marginBottom: 8,
  },
});