import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const SectionHeader: React.FC<{
  title?: string;
  onViewPress?: () => void;
  isExpanded?: Boolean;
}> = ({title, onViewPress, isExpanded}) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text onPress={onViewPress} style={styles.headerViewText}>
        {isExpanded ? 'View Less' : 'View All'}
      </Text>
    </View>
  );
};

export default SectionHeader;
