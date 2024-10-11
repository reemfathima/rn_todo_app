import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

Icon.loadFont();

const CategoryItem: React.FC<{
  item: {id: string; name: string; icon: string; color: string};
  index: number;
}> = ({item, index}) => {
  const marginRight = (index + 1) % 3 !== 0 ? 15 : 0;

  return (
    <TouchableOpacity style={[styles.categoryItem, {marginRight}]}>
      <Icon name={item.icon} size={32} color={item.color} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
