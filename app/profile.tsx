import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Typography from '../components/ui/Typography';

export default function ProfileScreen() {
  const stats = [
    { label: 'Totalt bikupor', value: '5' },
    { label: 'Inspektioner i år', value: '47' },
    { label: 'Honungskörd (kg)', value: '125' },
    { label: 'År som biodlare', value: '3' },
  ];

  const settings = [
    { title: 'Notifieringar', subtitle: 'Hantera dina aviseringar' },
    { title: 'Backup & Synk', subtitle: 'Säkerhetskopiera dina data' },
    { title: 'Exportera data', subtitle: 'Ladda ner dina inspektioner' },
    { title: 'Om appen', subtitle: 'Version 1.0.0' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Section title="Biodlar-statistik">
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <Card key={index} style={styles.statCard}>
                <Typography variant="h2" color="primary" align="center">
                  {stat.value}
                </Typography>
                <Typography variant="caption" color="muted" align="center">
                  {stat.label}
                </Typography>
              </Card>
            ))}
          </View>
        </Section>

        <Section title="Snabbåtgärder">
          <View style={styles.quickActions}>
            <Button 
              title="Exportera rapport" 
              onPress={() => {}} 
              variant="primary"
            />
            <Button 
              title="Backup data" 
              onPress={() => {}} 
              variant="secondary"
            />
          </View>
        </Section>

        <Section title="Inställningar">
          {settings.map((setting, index) => (
            <Card key={index} style={styles.settingCard}>
              <Typography variant="h4" color="primary">
                {setting.title}
              </Typography>
              <Typography variant="caption" color="muted">
                {setting.subtitle}
              </Typography>
            </Card>
          ))}
        </Section>

        <Section title="Support">
          <Card style={styles.supportCard}>
            <Typography variant="h4" color="primary" style={styles.supportTitle}>
              Behöver du hjälp?
            </Typography>
            <Typography variant="body" color="secondary" style={styles.supportText}>
              Kontakta oss för support eller feedback om appen.
            </Typography>
            <View style={styles.supportActions}>
              <Button 
                title="Kontakta support" 
                onPress={() => {}} 
                variant="outline"
              />
            </View>
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  settingCard: {
    marginBottom: 8,
  },
  supportCard: {
    backgroundColor: '#F0F9FF',
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  supportTitle: {
    marginBottom: 8,
  },
  supportText: {
    marginBottom: 16,
  },
  supportActions: {
    alignSelf: 'flex-start',
  },
});