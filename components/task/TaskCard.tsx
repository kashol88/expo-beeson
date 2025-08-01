import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import Typography from '../ui/Typography';

interface TaskCardProps {
  task: {
    id: number;
    task: string;
    priority: string;
    due: string;
  };
}

const TaskCard = memo<TaskCardProps>(({ task }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={[
          styles.priorityDot, 
          { backgroundColor: getPriorityColor(task.priority) }
        ]} />
        <Typography variant="body" color="primary" style={styles.title}>
          {task.task}
        </Typography>
      </View>
      <Typography variant="caption" color="muted">
        {task.due}
      </Typography>
    </Card>
  );
});

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  priorityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontWeight: '600',
  },
});