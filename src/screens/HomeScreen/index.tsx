import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconTextInput from '../../components/IconTextInput';
import {BottomTabScreenProps} from '../../navigation/types';
import SectionHeader from './SectionHeader';
import {styles} from './styles';
import CategoryItem from './CategoryItem';

Icon.loadFont();

const HomeScreen: React.FC<BottomTabScreenProps<'Home'>> = ({navigation}) => {
  // const handleNavigateToSettings = () => {
  //   navigation.navigate('Settings'); // Navigate to Settings from Home
  // };

  const [isAllCategoriesShown, setIsAllCategoriesShown] = useState(false);
  const isAllTasksShown = false;

  const categories = [
    {id: '1', name: 'Work', icon: 'briefcase-outline', color: '#00bcd4'},
    {id: '2', name: 'Personal', icon: 'account-outline', color: '#4caf50'},
    {
      id: '3',
      name: 'Shopping',
      icon: 'cart-variant',
      color: '#f5c001',
    },
    {id: '4', name: 'Fitness', icon: 'dumbbell', color: '#ff6f61'},
    {id: '5', name: 'Study', icon: 'school-outline', color: '#9c27b0'},
    {id: '6', name: 'Travel', icon: 'airplane', color: '#f44336'},
    {id: '7', name: 'Travel', icon: 'airplane', color: '#f44336'},
    {id: '8', name: 'Personal', icon: 'account-outline', color: '#4caf50'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <IconTextInput leftIcon="magnify" placeholder="Search for Tasks" />

        <SectionHeader
          title="Categories"
          isExpanded={isAllCategoriesShown}
          onViewPress={() => setIsAllCategoriesShown(prev => !prev)}
        />

        <FlatList
          scrollEnabled={false}
          data={isAllCategoriesShown ? categories : categories.slice(0, 6)}
          renderItem={({item, index}) => (
            <CategoryItem item={item} index={index} />
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          style={styles.categoriesList}
          columnWrapperStyle={styles.categoriesColWrapper}
        />

        <SectionHeader
          title="Tasks"
          isExpanded={isAllTasksShown}
          onViewPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
