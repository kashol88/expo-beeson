import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import Section from '../components/layout/Section';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Typography from '../components/ui/Typography';
import { getStatusVariant, getStatusText } from '../utils/variants';

export default function InspectionsScreen() {
  const recentInspections = [
    { id: 1, hive: "Kupol A", date: "2024-07-30", inspector: "Du", findings: "Stark koloni, drottning synlig", status: "completed" },
    { id: 2, hive: "Kupol B", date: "2024-07-28", inspector: "Du", findings: "Behöver mer utrymme", status: "completed" },
    { id: 3, hive: "Kupol C", date: "2024-07-25", inspector: "Du", findings: "Varroakvalster upptäckta", status: "action_needed" },
  ];

  const upcomingInspections = [
    { id: 1, hive: "Kupol D", scheduledDate: "2024-08-02", type: "Rutinkontroll" },
    { id: 2, hive: "Kupol E", scheduledDate: "2024-08-03", type: "Honungskörd" },
    { id: 3, hive: "Kupol F", scheduledDate: "2024-08-04", type: "Honungskörd" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.quickAction}>
          <Button 
            title="Starta ny inspektion" 
            onPress={() => {}} 
            variant="primary"
            size="large"
          />
        </View>

        <Section 
          title="Kommande Inspektioner"
          action={{ text: "Schemalägg ny", onPress: () => {} }}
        >
          {upcomingInspections.map((inspection) => (
            <Card key={inspection.id} style={styles.inspectionCard}>
              <View style={styles.inspectionHeader}>
                <Typography variant="h4" color="primary">
                  {inspection.hive}
                </Typography>
                <Typography variant="caption" color="muted">
                  {inspection.scheduledDate}
                </Typography>
              </View>
              <Typography variant="body" color="secondary">
                {inspection.type}
              </Typography>
            </Card>
          ))}
        </Section>

        <Section 
          title="Senaste Inspektioner"
          action={{ text: "Visa alla", onPress: () => {} }}
        >
          {recentInspections.map((inspection) => (
            <Card key={inspection.id} style={styles.inspectionCard}>
              <View style={styles.inspectionHeader}>
                <View style={styles.inspectionInfo}>
                  <Typography variant="h4" color="primary">
                    {inspection.hive}
                  </Typography>
                  <Typography variant="caption" color="muted">
                    {inspection.date} • {inspection.inspector}
                  </Typography>
                </View>
                <Badge 
                  text={getStatusText(inspection.status)}
                  variant={getStatusVariant(inspection.status)}
                />
              </View>
              <Typography variant="body" color="secondary" style={styles.findings}>
                {inspection.findings}
              </Typography>
            </Card>
          ))}
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
  quickAction: {
    marginTop: 16,
    marginBottom: 24,
  },
  inspectionCard: {
    marginBottom: 12,
  },
  inspectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  inspectionInfo: {
    flex: 1,
  },
  findings: {
    marginTop: 4,
  },
});