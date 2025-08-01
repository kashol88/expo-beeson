import React, { memo, useCallback } from 'react';
import { View, FlatList, ListRenderItem, TouchableOpacity, StyleSheet } from 'react-native';
import Typography from '../ui/Typography';
import { spacing } from '../../constants/theme';

interface SectionWithListProps<T> {
  title: string;
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  action?: {
    text: string;
    onPress: () => void;
  };
}

function SectionWithList<T>({ 
  title, 
  data, 
  renderItem, 
  keyExtractor, 
  action 
}: SectionWithListProps<T>) {
  const memoizedRenderItem = useCallback(renderItem, [renderItem]);
  
  return (
    <View style={styles.section}>
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
      <FlatList
        data={data}
        renderItem={memoizedRenderItem}
        keyExtractor={keyExtractor}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing['3xl'],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  actionText: {
    color: '#3B82F6',
    fontWeight: '600',
  },
});

export default memo(SectionWithList) as typeof SectionWithList;