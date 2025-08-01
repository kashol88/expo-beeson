import React, { memo, useMemo } from 'react';
import { FlatList, ListRenderItem, ViewStyle } from 'react-native';

interface OptimizedListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
  estimatedItemSize?: number;
  maxToRenderPerBatch?: number;
  windowSize?: number;
  removeClippedSubviews?: boolean;
  getItemLayout?: (data: T[] | null | undefined, index: number) => {
    length: number;
    offset: number;
    index: number;
  };
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

function OptimizedList<T>({
  data,
  renderItem,
  keyExtractor,
  estimatedItemSize = 80,
  maxToRenderPerBatch = 10,
  windowSize = 10,
  removeClippedSubviews = true,
  getItemLayout,
  style,
  contentContainerStyle,
}: OptimizedListProps<T>) {
  const optimizedData = useMemo(() => data, [data]);

  return (
    <FlatList
      data={optimizedData}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      maxToRenderPerBatch={maxToRenderPerBatch}
      windowSize={windowSize}
      removeClippedSubviews={removeClippedSubviews}
      getItemLayout={getItemLayout}
      initialNumToRender={20}
      updateCellsBatchingPeriod={50}
      style={style}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default memo(OptimizedList) as typeof OptimizedList;