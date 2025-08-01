import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import HiveCard from '../components/hive/HiveCard';
import Section from '../components/layout/Section';
import TaskCard from '../components/task/TaskCard';
import Button from '../components/ui/Button';
import WeatherCard from '../components/weather/WeatherCard';
import { useApp } from '../contexts/AppContext';

export default function Index() {
  const [myState, setMyState] = useState({
    firstName: "Kasper",
    lastName: "Holm",
  });
  const { state } = useApp();
  const router = useRouter();

  const handleButtonPress = () => {
    setMyState((currentState) => {
      return {
        ...currentState,
        lastName: "Björnsdotter"
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Button 
          onPress={handleButtonPress} 
          title={`Tryck här ${myState.firstName} ${myState.lastName}`} 
          variant="primary" 
        />
        
        <WeatherCard
          temperature={state.weather.temperature}
          condition={state.weather.condition}
          description={state.weather.description}
          wind={state.weather.wind}
          humidity={state.weather.humidity}
        />

        <Section 
          title="Mina Bikupor"
          action={{ text: "Se alla", onPress: () => router.push('/hives') }}
        >
          {state.hives.slice(0, 3).map((hive) => (
            <HiveCard 
              key={hive.id} 
              hive={hive} 
              onPress={() => console.log(`Tapped hive ${hive.id}`)}
            />
          ))}
        </Section>

        <Section 
          title="Kommande Uppgifter"
          action={{ text: "Se alla", onPress: () => router.push('/inspections') }}
        >
          {state.tasks.slice(0, 3).map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </Section>

        <Section title="Snabbåtgärder">
          <View style={styles.quickActions}>
            <Button 
              title="Ny Inspektion" 
              onPress={() => router.push('/inspections')} 
              variant="primary"
            />
            <Button 
              title="Lägg till Kupol" 
              onPress={() => router.push('/hives')} 
              variant="secondary"
            />
          </View>
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
  quickActions: {
    flexDirection: "row",
    gap: 12,
  },
});
