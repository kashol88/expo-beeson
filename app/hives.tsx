import React, { useCallback } from 'react';
import { View, StyleSheet, StatusBar, ListRenderItem } from 'react-native';
import Section from '../components/layout/Section';
import HiveCard from '../components/hive/HiveCard';
import Button from '../components/ui/Button';
import OptimizedList from '../components/ui/OptimizedList';

type Hive = {
  id: number;
  name: string;
  health: string;
  lastInspection: string;
  honey: string;
  status: string;
};

export default function HivesScreen() {
  const hives: Hive[] = [
    { id: 1, name: "Kupol A", health: "Utmärkt", lastInspection: "2 dagar sedan", honey: "12 kg", status: "active" },
    { id: 2, name: "Kupol B", health: "Bra", lastInspection: "5 dagar sedan", honey: "8 kg", status: "active" },
    { id: 3, name: "Kupol C", health: "Varning", lastInspection: "1 vecka sedan", honey: "4 kg", status: "warning" },
    { id: 4, name: "Kupol D", health: "Bra", lastInspection: "3 dagar sedan", honey: "10 kg", status: "active" },
    { id: 5, name: "Kupol E", health: "Utmärkt", lastInspection: "1 dag sedan", honey: "15 kg", status: "active" },
  ];

  const renderHiveItem: ListRenderItem<Hive> = useCallback(({ item }) => (
    <HiveCard 
      hive={item} 
      onPress={() => console.log(`Tapped hive ${item.id}`)}
    />
  ), []);

  const keyExtractor = useCallback((item: Hive) => item.id.toString(), []);

  const getItemLayout = useCallback((data: Hive[] | null | undefined, index: number) => ({
    length: 88,
    offset: 88 * index,
    index,
  }), []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <View style={styles.content}>
        <View style={styles.addButton}>
          <Button 
            title="Lägg till ny kupol" 
            onPress={() => {}} 
            variant="primary"
          />
        </View>

        <OptimizedList
          data={hives}
          renderItem={renderHiveItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          estimatedItemSize={88}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      </View>
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
  },
  addButton: {
    marginTop: 16,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});