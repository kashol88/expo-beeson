import React, { memo, useCallback } from 'react';
import { SectionList as RNSectionList, ListRenderItem, SectionListRenderItem } from 'react-native';
import Section from '../layout/Section';

interface SectionData<T> {
  title: string;
  data: T[];
  action?: {
    text: string;
    onPress: () => void;
  };
  renderItem: ListRenderItem<T>;
  keyExtractor: (item: T, index: number) => string;
}

interface SectionListProps<T> {
  sections: SectionData<T>[];
  ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
  ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
}

function OptimizedSectionList<T>({ sections, ListHeaderComponent, ListFooterComponent }: SectionListProps<T>) {
  const renderSectionHeader: SectionListRenderItem<T, SectionData<T>> = useCallback(({ section }) => (
    <Section title={section.title} action={section.action}>
      {null}
    </Section>
  ), []);

  return (
    <RNSectionList
      sections={sections}
      renderSectionHeader={renderSectionHeader}
      renderItem={({ item, section }) => section.renderItem({ item, index: 0 })}
      keyExtractor={(item, index) => sections[0].keyExtractor(item, index)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      stickySectionHeadersEnabled={false}
    />
  );
}

export default memo(OptimizedSectionList) as typeof OptimizedSectionList;